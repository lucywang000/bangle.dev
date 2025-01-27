/**
 * @jest-environment jsdom
 */

/** @jsx psx */
import { psx, sendKeyToPm, setSelectionNear } from '@bangle.dev/test-helpers';
import { italic } from '../index';
import { defaultTestEditor } from './test-editor';

const keybindings = italic.defaultKeys;

describe('Basic', () => {
  const testEditor = defaultTestEditor();

  test('toggles Italic correctly', async () => {
    const { view } = testEditor(
      <doc>
        <para>hello [world]</para>
      </doc>,
    );

    sendKeyToPm(view, keybindings.toggleItalic);

    expect(view.state.doc).toEqualDocument(
      <doc>
        <para>
          hello <italic>world</italic>
        </para>
      </doc>,
    );

    sendKeyToPm(view, keybindings.toggleItalic);

    expect(view.state.doc).toEqualDocument(
      <doc>
        <para>hello world</para>
      </doc>,
    );
  });

  test('queryIsItalicActive works correctly', async () => {
    const { view } = testEditor(
      <doc>
        <para>hello [world]</para>
      </doc>,
    );

    italic.commands.toggleItalic()(view.state, view.dispatch, view);

    expect(view.state.doc).toEqualDocument(
      <doc>
        <para>
          hello <italic>world</italic>
        </para>
      </doc>,
    );

    setSelectionNear(view, 9);

    expect(italic.commands.queryIsItalicActive()(view.state)).toBe(true);
  });
});
