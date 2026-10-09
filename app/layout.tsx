import type { Metadata } from "next";
import { Zilla_Slab, Public_Sans, Readex_Pro } from "next/font/google";
import "./globals.css";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
});

// Used for Arabic text, which the two fonts above do not cover.
const readexPro = Readex_Pro({
  variable: "--font-readex",
  subsets: ["arabic"],
});

const description =
  "A website and e-learning concept for Cambridge International College Sudan. A graduation project by students of the college.";

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
    <html
      lang="en"
      className={`${zillaSlab.variable} ${publicSans.variable} ${readexPro.variable} h-full antialiased`}
    >
      {/* Each page brings its own header and footer through SiteShell,
          because they depend on the page's language. */}
      <body className="min-h-full">{children}</body>
    </html>
  );
}
