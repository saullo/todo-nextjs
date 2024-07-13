import { ServerProviders } from "@/components/server-providers";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>;

const LocaleLayout = ({ children, params: { locale } }: Props) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.variable
        )}
      >
        <ServerProviders>{children}</ServerProviders>
      </body>
    </html>
  );
};

export default LocaleLayout;
