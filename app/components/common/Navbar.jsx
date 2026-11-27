"use client";

import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import Link from "next/link";

import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import loginPage from "@/app/auth/login/page";

import {
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi";

export default function Navbar() {
  return (
    <FlowbiteNavbar
      fluid
      rounded
      className="border-b border-gray-200 bg-white px-4 py-3 shadow-sm"
    >
      {/* Logo */}
      <NavbarBrand href="/">
        <span className="text-2xl font-bold text-blue-600">
          ShopEase
        </span>
      </NavbarBrand>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 md:order-2">

        {/* Search Bar - Desktop */}
        <div className="hidden w-64 lg:block">
          <SearchBar />
        </div>

        {/* Account */}
        <Link
          href="/auth/login"
          aria-label="My Account"
          className="text-gray-700 hover:text-blue-600"
        >
          <HiOutlineUser size={25} />
        </Link>

        {/* Wishlist */}
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className="text-gray-700 hover:text-blue-600"
        >
          <HiOutlineHeart size={25} />
        </Link>

        {/* Cart */}
        <CartIcon />

        {/* Mobile Menu Toggle */}
        <NavbarToggle />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>

        <NavbarLink href="/products">
          Shop
        </NavbarLink>

        <NavbarLink href="/categories">
          Categories
        </NavbarLink>

        <NavbarLink href="/deals">
          Deals
        </NavbarLink>

        {/* Search Bar - Mobile */}
        <div className="py-2 lg:hidden">
          <SearchBar />
        </div>
      </NavbarCollapse>

    </FlowbiteNavbar>
  );
}