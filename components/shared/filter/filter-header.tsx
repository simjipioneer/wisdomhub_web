import { DrawerClose, DrawerHeader } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

const FilterHeader = () => {
  return (
    <DrawerHeader className="p-0">
      <DialogTitle className="heading-4 web:heading-3">필터</DialogTitle>
      <DrawerClose>
        <XIcon className="size-4 web:size-6" />
      </DrawerClose>
    </DrawerHeader>
  );
};
export default FilterHeader;
