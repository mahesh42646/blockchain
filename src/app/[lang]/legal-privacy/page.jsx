import { redirect } from 'next/navigation';

export default async function LegalPrivacyIndexPage({ params }) {
  const { lang } = await params;
  redirect(`/${lang}/legal-privacy/user-agreement`);
}
