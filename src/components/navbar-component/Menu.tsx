"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src={"/menu.png"}
        alt={"Menu img"}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex gap-8 flex-col items-center justify-center text-2xl z-10">
          <Link href={"/"}>HomePage</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/deals"}>Deals</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/logut"}>Logout</Link>
          <Link href={"/cart"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
