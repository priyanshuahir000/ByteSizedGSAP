import { useRef } from "react";
import CopyCodeButton from "./CopyCodeButton";

const CodeBlock = ({
  code,
  language = "jsx",
  showLineNumbers = true,
  className = "",
}) => {
  const codeRef = useRef(null);

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyCodeButton code={code} />
      </div>

      <pre
        ref={codeRef}
        className={`bg-zinc-900/90 border border-green-500/20 rounded-lg p-4 overflow-x-auto text-sm ${
          showLineNumbers ? "line-numbers" : ""
        }`}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
