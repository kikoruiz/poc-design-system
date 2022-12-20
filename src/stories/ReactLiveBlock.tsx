import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useClipboard } from "./useClipboard";

import { useState } from "react";

interface Props {
  code: string;
  scope?: Record<string, any>;
  editable?: boolean;
}

export function ReactLiveBlock({ code, editable = true, scope }: Props) {
  const [editorCode, setEditorCode] = useState(code.trim());
  const { hasCopied, onCopy } = useClipboard(code);

  const onChange = (newCode: string) => setEditorCode(newCode.trim());
  const reset = () => setEditorCode(code);

  return (
    <LiveProvider code={editorCode} scope={scope}>
      <LivePreview />
      <div
        style={{
          position: "relative",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px",
          outline: "none",
          background: "#333",
        }}
      >
        {editable && (
          <p
            style={{
              textAlign: "center",
              color: "white",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Editable Example
          </p>
        )}
        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: 5,
            top: 5,
            right: 5,
          }}
        >
          {code !== editorCode && <button onClick={reset}>Reset code</button>}
          <button onClick={onCopy}>{hasCopied ? "Copied" : "Copy"}</button>
        </div>
        <LiveEditor disabled={!editable} onChange={onChange} />
      </div>
      {editable && <LiveError />}
    </LiveProvider>
  );
}
