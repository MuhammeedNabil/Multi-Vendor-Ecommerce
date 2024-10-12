"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModel from "./navbar-component/CartModel";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // TEMP
  const isLoggedIn = false;
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center gap-4 xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        alt="Profile Icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt="Notification Icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src={"/cart.png"}
        alt="Cart Icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && (
        <CartModel />
      )}
    </div>
  );
};

export default NavIcons;
