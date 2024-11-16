import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ClientWrapper from "@/components/ui/ClientWrapper";
import "./globals.css";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof routing.locales)[number] }; // Use valid locales
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Fetch the messages for the current locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientWrapper>{children}</ClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
