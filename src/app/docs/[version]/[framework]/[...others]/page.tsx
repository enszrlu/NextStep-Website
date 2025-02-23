import { redirect } from 'next/navigation';

export default function page({
  params,
}: {
  params: { version: string; framework: string; others: string[] };
}) {
  redirect(`/docs/${params.version}/${params.framework}/`);
}
