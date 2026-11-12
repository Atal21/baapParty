import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { FilterProvider } from '@/context/FilterContext';
import { AuthProvider } from '@/context/AuthContext';


export const metadata = {
  title:
    "Bharatiya Avijit Awaaz Party (BAAP) — The People's Voice, The People's Right",
  description:
    "Official website of Bharatiya Avijit Awaaz Party (BAAP) — 18 Resolution for India: a pledge to build a safe, prosperous, just, and dignified India.",
  keywords: ["election", "political party", "India", "campaign", "manifesto"],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AuthProvider>
          <FilterProvider>
            <SiteChrome>{children}</SiteChrome>
          </FilterProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
