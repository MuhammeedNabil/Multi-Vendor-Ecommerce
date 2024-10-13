import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}
        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}

        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}

        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}

        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
        {/* =-----------------------------------= */}

        <Link
          href={"/list?cat=test"}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={
                "https://images.pexels.com/photos/6387827/pexels-photo-6387827.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
              alt="Soda Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <span className="mt-8 font-ligh text-xl tracking-wide">
            Category Name
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
