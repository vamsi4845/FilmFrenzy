"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface LinkProps {
  name: string;
  href: string;
}
const links: LinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My Lists", href: "/home/user/list" },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full mx-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="FilmFrenzy" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => {
            return (
              <div key={idx}>
                {pathname === link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="text-white font-semibold underline text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="text-gray-300 font-normal text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
};
export default Navbar;
