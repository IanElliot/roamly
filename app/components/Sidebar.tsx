"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  path: string;
  icon: string; // We'll use heroicons, but I'll show this in the next step
}

const navItems: NavItem[] = [
  { label: "Discover", path: "/discover", icon: "globe" },
  { label: "Accommodations", path: "/accommodations", icon: "home" },
  { label: "Flights", path: "/flights", icon: "airplane" },
  { label: "Weather", path: "/weather", icon: "sun" },
  { label: "Activities", path: "/activities", icon: "map" },
  { label: "My Trips", path: "/trips", icon: "bookmark" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-orange-500">TravelHub</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 ${
              pathname === item.path ? "bg-orange-50 text-orange-500" : ""
            }`}
          >
            {/* We'll add icons in the next step */}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
