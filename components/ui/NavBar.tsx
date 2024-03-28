'use client'
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { Logo } from "./Logo.js";
import { SearchIcon } from "./SearchIcon";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Logo />
          <p className="hidden sm:block font-bold text-inherit px-3">Goddess Collectors</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3 flex-grow ml-20">
          <NavbarItem>
            <Link color="foreground" href="#">
              TGC Pokemon
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              TGC One Piece
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Sculptures
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center flex-grow pl-12" justify="center">
        <div className="relative flex items-center w-full">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10 px-2",
              mainWrapper: "h-full",
              input: "text-small flex-grow",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 flex items-center",
            }}
            placeholder="Type to search..."
            size="sm"
            type="search"
            className="px-5"
          />
          <SearchIcon size={19} />
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
                width: "41px",
                height: "41px",
                borderRadius: '50%',
                overflow: 'hidden',
                zIndex: 1, 
              }} 
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              onClick={toggleMenu}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="flex flex-col">
            <DropdownItem key="profile" className="h-20 gap-2">
              <p className="font-semibold">Name</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics" >Analytics</DropdownItem>
            <DropdownItem key="system" >System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" className="bg-blue-200 border-2 py-1 my-2">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
