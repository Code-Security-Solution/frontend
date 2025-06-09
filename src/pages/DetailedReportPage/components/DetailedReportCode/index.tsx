import { getLanguageFromExtension } from '@/utils/languageFromExtension';
import CodeEditor from '@uiw/react-textarea-code-editor';
import rehypePrism from 'rehype-prism-plus';
import { Element } from 'rehype-prism-plus/generator';
import rehypeRewrite from 'rehype-rewrite';
import '@/styles/prism.css';

interface DetailedReportCodeProps {
  code: string;
  filename: string;
  startLine: number;
  endLine: number;
}

const DetailedReportCode = ({ code, filename, startLine, endLine }: DetailedReportCodeProps) => {
  const ext = filename.split('.').pop()?.toLowerCase() || '';
  const language = getLanguageFromExtension(ext);

  return (
    <CodeEditor
      value={code}
      language={language}
      padding={16}
      readOnly
      style={{
        fontFamily: 'ui-monospace, monospace',
        fontSize: 16,
        maxHeight: '30vh',
        overflowY: 'auto',
      }}
      rehypePlugins={[
        [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
        [
          rehypeRewrite,
          {
            rewrite: (node: Element) => {
              const cls = node.properties?.className as string[] | undefined;
              const lineAttr = node.properties?.line;
              if (cls?.includes('code-line') && lineAttr) {
                const lineNum = Number(lineAttr);
                if (lineNum >= startLine && lineNum <= endLine) {
                  cls.push('highlight-line-red');
                }
              }
            },
          },
        ],
      ]}
    >
      DetailedReportCode
    </CodeEditor>
  );
};

export default DetailedReportCode;
