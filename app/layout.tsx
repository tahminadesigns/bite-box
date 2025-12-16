// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Bite-Box",
  description: "Premium food delivery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070606] text-gray-100">
        <Header />
        {/* make some top-padding so page content does not hide under fixed header */}
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}
