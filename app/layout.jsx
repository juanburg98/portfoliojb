import './globals.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
