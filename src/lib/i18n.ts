import { i18nConfig } from "@/config/i18n";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!i18nConfig.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
