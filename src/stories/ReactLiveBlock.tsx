import React, { ReactElement, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import reactElementToJSXString from "react-element-to-jsx-string";

import { useClipboard } from "./useClipboard";

interface ReactLiveBlockProps {
  children: ReactElement | ReactElement[];
  scope?: Record<string, any>;
  editable?: boolean;
}

export function ReactLiveBlock({
  children,
  editable = true,
  scope,
}: ReactLiveBlockProps) {
  const childrenLength = React.Children.toArray(children).length;
  const code = reactElementToJSXString(
    childrenLength > 1 ? <>{children}</> : children,
    {
      showFunctions: true,
      maxInlineAttributesLineLength: 150,
    }
  );

  const [editorCode, setEditorCode] = useState(code);
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const onChange = (newCode: string) => setEditorCode(newCode);
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
              fontSize: "1.4rem",
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
        <LiveEditor
          disabled={!editable}
          onChange={onChange}
          style={{
            fontSize: "1.6rem",
          }}
        />
      </div>
      {editable && <LiveError />}
    </LiveProvider>
  );
}

interface CodeSnippetProps {
  code: string;
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <LiveProvider code={code}>
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
        <p
          style={{
            textAlign: "center",
            color: "white",
            margin: 0,
            fontWeight: 700,
          }}
        >
          Code snippet
        </p>

        <div
          style={{
            position: "absolute",
            display: "flex",
            gap: 5,
            top: 5,
            right: 5,
          }}
        >
          <button onClick={onCopy}>{hasCopied ? "Copied" : "Copy"}</button>
        </div>
        <LiveEditor disabled />
      </div>
    </LiveProvider>
  );
}
