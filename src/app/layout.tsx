import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-orange-500">
                🌍 TravelHub
              </div>
            </Link>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 hover:opacity-80">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="User profile"
                    width={40}
                    height={40}
                  />
                </div>
              </button>
              {/* Dropdown menu - can be implemented later */}
            </div>
          </div>
        </nav>

        {/* Main Content - adjusted with top padding for fixed nav */}
        <div className="flex justify-center min-h-screen pt-16">
          <main className="w-full max-w-7xl p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
