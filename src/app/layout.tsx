// app/layout.tsx
import { Toaster } from "@/components/ui/toaster";
import "./globals.css"; // if needed

export const metadata = {
  title: "My App",
  description: "An example app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
