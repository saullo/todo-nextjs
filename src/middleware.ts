import createMiddleware from "next-intl/middleware";
import { i18nConfig } from "./config/i18n";

export const config = {
  matcher: ["/", "/(en-US)/:path*"],
};

const i18nMiddleware = createMiddleware({
  locales: i18nConfig.locales,
  defaultLocale: i18nConfig.default,
});

export default i18nMiddleware;
