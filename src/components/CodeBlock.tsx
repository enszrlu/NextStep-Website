import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import { useEffect } from 'react';

const CodeBlock = ({ language, code }: { language: string; code: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [language, code]);

  return (
    <pre className="rounded-md">
      <code className={`language-${language}`}>{code.trim()}</code>
    </pre>
  );
};

export default CodeBlock;
