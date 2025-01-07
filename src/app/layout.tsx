
import Nav from "./_components/Nav/page";
import "./globals.css";
import Footer from "./_components/Footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
