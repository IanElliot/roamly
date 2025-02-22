"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserNav() {
  const router = useRouter();
  const isAuthenticated = false;

  const handleUserClick = () => {
    if (isAuthenticated) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  return (
    <div onClick={handleUserClick} className="relative group cursor-pointer">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          alt="User profile"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
