import { redirect } from 'next/navigation';

export default function DocsPage({
  params,
}: {
  params: { version: string; framework: string };
}) {
  redirect(
    `/docs/${params.version || 'latest'}/${params.framework || 'nextjs'}/get-started`,
  );
}
