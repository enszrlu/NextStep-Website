import { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';
import codeBlocks from '@/lib/codeBlocks';

export const metadata: Metadata = {
  title: 'Basic Setup - NextStep Documentation',
  description: 'Learn how to set up NextStep in your project',
};

export default function BasicSetupPage({ params }: { params: { version: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Basic Setup</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Learn how to set up NextStep in your{' '}
        {params.version === 'v2' ? 'Next.js App Router' : ''} project.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Provider Setup
      </h2>

      <CodeBlock
        language="tsx"
        code={
          params.version === 'v2'
            ? codeBlocks.basicSetup.code
            : codeBlocks.basicSetupShorterPagesRouter.code
        }
      />

      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Using the Hook
      </h2>

      <CodeBlock language="tsx" code={codeBlocks.useNextStep.code} />
    </div>
  );
}
