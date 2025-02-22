import "./globals.css";
import Link from "next/link";
import UserNav from "@/components/UserNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-orange-500">
                🌍 TravelHub
              </div>
            </Link>
            <UserNav />
          </div>
        </nav>

        <div className="flex justify-center min-h-screen pt-16">
          <main className="w-full max-w-7xl p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
