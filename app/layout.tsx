import type { Metadata } from "next";
import { Zilla_Slab, Public_Sans } from "next/font/google";
import "./globals.css";
import ProjectNotice from "./components/ProjectNotice";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
});

const description =
  "A website and e-learning concept for Cambridge International College Sudan. Graduation project by Mustafa Hamad ElAmin.";

export const metadata: Metadata = {
  title: {
    default: "Cambridge International College Sudan | Graduation project",
    template: "%s | Cambridge International College Sudan",
  },
  description,
  // The picture shown when the site's link is shared.
  openGraph: {
    title: "Cambridge International College Sudan",
    description,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Cambridge International College Sudan, graduation project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge International College Sudan",
    description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zillaSlab.variable} ${publicSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ProjectNotice />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
