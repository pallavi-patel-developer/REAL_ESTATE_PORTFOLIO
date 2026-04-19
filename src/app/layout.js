import "./globals.css";

export const metadata = {
  title: "AreaProps | Real Estate Portfolio",
  description:
    "A polished real estate portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
