import { useEffect, forwardRef, useRef } from "react";

import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { defaultKeymap } from "@codemirror/commands";

export const CodeEditor = () => {
  const editor = useRef(null);

  useEffect(() => {
    const startState = EditorState.create({
      doc: __CODE__,
      extensions: [keymap.of(defaultKeymap), oneDark, javascript()]
    });

    const view = new EditorView({ state: startState, parent: editor.current! });

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editor}></div>;
};

export default forwardRef<HTMLDivElement>(CodeEditor);
