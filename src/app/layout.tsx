
import Nav from "./_components/Nav/page";
import "./globals.css";
import Footer from "./_components/Footer"
import Head from "next/head";

export const metadata ={
  title :"foodix",
  description:"All your food in one place"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <title>Meal Finder</title>

      <meta name="description" content="Find your favorite meals and recipes" />
        <meta property="og:title" content="Meal Finder" />
        <meta property="og:description" content="Find your favorite meals and recipes" />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta name="robots" content="index, follow" />      </Head>
      <body  className="flex flex-col overflow-x-hidden"    >
      <Nav />
        <main className="flex-grow">
        {children}

        </main>
        <Footer/>
      </body>
    </html>
  );
}
