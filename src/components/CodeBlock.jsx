import React, { useState } from 'react';
import './CodeBlock.css';

function CodeBlock({ children, language = 'SQL' }) {
  const [copied, setCopied] = useState(false);

  const getTextContent = (node) => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (node?.props?.children) return getTextContent(node.props.children);
    return '';
  };

  const handleCopy = () => {
    const text = getTextContent(children);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      /* fallback for environments without clipboard API */
      const textarea = document.createElement('textarea');
      textarea.value = getTextContent(children);
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-block code-block--enhanced">
      <div className="code-block__topbar">
        <div className="code-block__dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <span className="code-block__lang">{language}</span>
        <button
          className={`code-copy-btn${copied ? ' code-copy-btn--copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy code'}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <>
              <span className="code-copy-btn__icon">✓</span>
              Copied
            </>
          ) : (
            <>
              <span className="code-copy-btn__icon">⎘</span>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="code-block__body">
        {children}
      </div>
    </div>
  );
}

export default CodeBlock;
