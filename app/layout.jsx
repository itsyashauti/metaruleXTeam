import "./globals.css";

export const metadata = {
  title: "MetaRulesX Team",
  description: "Meet the MetaRulesX team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
