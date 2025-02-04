import * as React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import MenuContent from "./menu-content";
import MenuHeader from "./menu-header";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { User } from "@/app/api/dto/user";

interface HamburgerMenuProps {
  user: User;
}

export function HamburgerMenu({ user }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Drawer
      direction="right"
      open={isOpen}
      onOpenChange={setIsOpen}
      fixed={true}
      dismissible={false}
      handleOnly={false}
      onDrag={(event) => event.preventDefault()}
      onRelease={(event) => event.preventDefault()}
    >
      <DrawerTrigger asChild>
        <button
          className="focus-visible:outline-none web:focus-visible:outline-1"
          onClick={handleOpen}
        >
          <HamburgerMenuIcon className="size-6" />
        </button>
      </DrawerTrigger>
      <DrawerContent
        style={{ touchAction: "none" }}
        className="pointer-events-none fixed inset-y-0 right-0 w-full max-w-[80%] overflow-x-hidden focus-visible:outline-none"
      >
        <MenuHeader user={user} />
        <MenuContent handleClose={handleClose} user={user} />
      </DrawerContent>
    </Drawer>
  );
}
