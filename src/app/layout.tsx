import Footer from '@/components/Footer';
import Nav from '@/components/header/Nav';
import { Metadata } from 'next';
import '@/styles/globals.css';
import { AuthProvider } from '@/components/AuthContext';

export const metadata: Metadata = {
  title: 'SomersetCU',
  description: 'SomersetCU Bank'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <header>
            <Nav />
          </header>
          <main>{children}</main>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
