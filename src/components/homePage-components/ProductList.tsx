"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-center flex-wrap">
      <Link
        href={""}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/4113664/pexels-photo-4113664.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Text and card button */}
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 text-center">My Desc</div>
        <button className="rounded-2xl w-max m-auto ring-1 ring-Pink text-Pink py-2 px-4 hover:bg-Pink hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* Item 2 */}
      <Link
        href={""}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/4389662/pexels-photo-4389662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/8879611/pexels-photo-8879611.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Text and card button */}
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 text-center">My Desc</div>
        <button className="rounded-2xl w-max m-auto ring-1 ring-Pink text-Pink py-2 px-4 hover:bg-Pink hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* iTEM 3  */}
      <Link
        href={""}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/17423266/pexels-photo-17423266/free-photo-of-close-up-of-red-bull-cans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/17423286/pexels-photo-17423286/free-photo-of-red-bull-energy-drink-cans.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Text and card button */}
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 text-center">My Desc</div>
        <button className="rounded-2xl w-max m-auto ring-1 ring-Pink text-Pink py-2 px-4 hover:bg-Pink hover:text-white">
          Add to Cart
        </button>
      </Link>
      {/* Item 4 */}
      <Link
        href={""}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/17461398/pexels-photo-17461398/free-photo-of-pepsi-can-in-dew.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={
              "https://images.pexels.com/photos/7033795/pexels-photo-7033795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        {/* Text and card button */}
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500 text-center">My Desc</div>
        <button className="rounded-2xl w-max m-auto ring-1 ring-Pink text-Pink py-2 px-4 hover:bg-Pink hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};
