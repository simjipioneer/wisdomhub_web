import type { Metadata, Viewport } from "next";
import "./globals.css";
import {
  SERVICE_DESCRIPTION,
  SERVICE_NAME,
  SERVICE_URL,
} from "@/constants/service";

const FAVICON_URL = "/logo.png";
const OG_IMAGE_URL = "/logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(SERVICE_URL),
  title: SERVICE_NAME,
  description: SERVICE_DESCRIPTION,
  icons: {
    icon: FAVICON_URL,
    shortcut: FAVICON_URL,
    apple: FAVICON_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SERVICE_URL,
    siteName: SERVICE_NAME,
    title: SERVICE_NAME,
    description: SERVICE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 800,
        height: 600,
        alt: SERVICE_NAME,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`mt-[56px] min-h-[calc(100vh-56px)] w-screen min-w-full overflow-x-hidden bg-white font-nanum antialiased web:mt-[84px] web:min-h-[calc(100vh-84px)] web:px-0`}
      >
        <meta
          name="google-site-verification"
          content="8nAWR6GsHSIGXQb9g7cD_dEFxFfyTvN1kEtlBx1oudo"
        />

        <div className="w-screen overflow-x-hidden px-5 web:mx-auto web:max-w-[600px]">
          {children}
        </div>
      </body>
    </html>
  );
}
