import { useState } from "react";

export function CodeBlockComponent({ code, language }) {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(code).then(() => setCopied(true));
    };
  
    return (
      <div className="relative">
        {language && (
          <div className="bg-gray-800 text-white p-2 rounded-t">
            {language}
          </div>
        )}
        <pre className="bg-black text-white p-4 rounded-b">
          <code>
            {code.split('\n').map((line, index) => (
              <div key={index}>
                <span className="text-gray-400 pr-4">{index + 1}</span>
                {line}
              </div>
            ))}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-0 right-0 bg-blue-500 text-white p-2 rounded-bl"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    );
  }