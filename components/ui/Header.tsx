'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { Logo } from "./Logo.js";
import { useAuthContext } from "../context/AuthContext.jsx";
import Link from 'next/link'; 
import CartWidget  from "./CartWidget";
import Image from "next/image.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuthContext(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout(); 
  };

  return (
    <header className="px-3" style={{ 
      background: "linear-gradient(to bottom right, rgba(14, 65, 102, 0.86), #0e4166)",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
    }}>
      <div className="border-b shadow">
        <Navbar>
          <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
                <Link href= "/"> 
                  <Logo />
                </Link>
                <p className="hidden sm:block text-white text-lg px-3">Goddess Collectors</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-3 flex-grow ml-20">
              <NavbarItem>
                <Link href="/pages/TGCPokemon"> 
                  <Image src="/pkLogo.png" alt="Tgc pokemon logo"  width={100} height={100}/>
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="/pages/TGCOnePiece" aria-current="page">
                  <Image src="/opLogo.png" alt="onepiece tgc" width={100} height={100} />
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link href="/pages/Sculpture"> 
                  <Image src="/sideshow.png" alt="sideshow" width={100} height={100} style={{ width: "auto", height: "auto" }} />
                </Link>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>

          <NavbarContent as="div" className="items-center flex-grow pl-12" justify="center">
            <div className="relative flex items-center w-full mx-auto">
              <div className="ml-auto p-2" style={{ cursor: "pointer" }} >
                    <CartWidget />
              </div>
              <Dropdown placement="bottom-end" isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: '50%',
                      overflow: 'hidden',
                      zIndex: 1,
                    }} 
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    onClick={toggleMenu}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat" className="flex flex-col" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}>
                  <DropdownItem key="profile" className="h-20 gap-2">
                    <p className="font-semibold">Testy</p>
                    <p className="font-semibold">test@test.com</p>
                  </DropdownItem>
                  <DropdownItem key="admin">
                    <Link href="/pages/Admin">Admin</Link>
                  </DropdownItem>
                  <DropdownItem key="orders">
                    <Link href="/pages/Admin/orders">Orders</Link>
                  </DropdownItem>
                  <DropdownItem key="contactUs">
                    <Link href="/pages/ContactUs">Contact Us</Link>
                  </DropdownItem>
                  <DropdownItem key="logout" onClick={handleLogout} className="bg-blue-200 border-2 py-1 my-2">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </NavbarContent>
        </Navbar>
      </div>
    </header>
  );
}
