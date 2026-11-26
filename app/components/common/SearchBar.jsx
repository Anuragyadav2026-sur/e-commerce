"use client";

import { TextInput } from "flowbite-react";
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar() {
  return (
    <div className="w-full max-w-md">
      <TextInput
        id="product-search"
        type="search"
        icon={HiOutlineSearch}
        placeholder="Search products..."
        sizing="md"
      />
    </div>
  );
}