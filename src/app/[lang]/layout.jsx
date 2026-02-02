import ConditionalLayout from "@/components/ConditionalLayout";
import { supportedLocales } from "@/lib/i18n";

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ lang: locale }));
}

export default function LangLayout({ children }) {
  return (
    <ConditionalLayout>
      {children}
    </ConditionalLayout>
  );
}
