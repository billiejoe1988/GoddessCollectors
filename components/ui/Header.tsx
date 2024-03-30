'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { Logo } from "./Logo.js";
import Link from 'next/link'; 
import { SearchIcon } from "./SearchIcon";
import ShoppingCartIcon  from "./ShoppingCartIcon"
import Image from "next/image.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  <Image src="/sideshow.png" alt="sideshow" width={100} height={100} />
                </Link>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>

          <NavbarContent as="div" className="items-center flex-grow pl-12" justify="center">
            <div className="relative flex items-center w-full">
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[20rem] h-10 px-2 border-b-2 border-gray-400 bg-transparent",
                  mainWrapper: "h-full",
                  input: "text-small flex-grow",
                  inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 flex items-center",
                }}
                placeholder="Type to search..."
                size="sm"
                type="search"
                className="px-5"
                style={{ 
                  outline: "none",
                  color: "#FFD700",
                  caretColor: "#FFD700",
                }}
              />
              <div style={{ cursor: "pointer" }} >
                <SearchIcon size={19} />
              </div>
              <div className="px-20 pt-2" style={{ cursor: "pointer" }} >
                <Link href="/pages/Cart"> 
                    <ShoppingCartIcon size={35} />
                </Link>
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
                      width: "47px",
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
                    <p className="font-semibold">Name</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">Configurations</DropdownItem>
                  <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                  <DropdownItem key="logout" className="bg-blue-200 border-2 py-1 my-2">
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
