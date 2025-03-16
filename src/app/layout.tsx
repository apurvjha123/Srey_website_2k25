import localFont from 'next/font/local';
import './globals.css';

// Register ByteBounce as a local font from your app directory
const byteBounce = localFont({
  src: './fonts/acbbc64bd1dc4d5d166a.ttf',
  variable: '--font-byte-bounce',
});

export const metadata = {
  title: 'Retro CRT UI',
  description: 'A retro-style UI with old-school vibes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={byteBounce.variable}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        fontFamily: 'var(--font-byte-bounce)',
        backgroundImage: 'url(/IMG_3995.PNG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {children}
      </body>
    </html>
  );
}