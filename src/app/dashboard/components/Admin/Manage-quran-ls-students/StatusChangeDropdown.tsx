"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useUpdateQuranLSUserMutation } from "@/redux/api/quran-lsApi";
import { Ellipsis } from "lucide-react";

const StatusChangeDropdown = ({
  studentId,
  currentStatus,
}: {
  studentId: string;
  currentStatus: string;
}) => {
  const { toast } = useToast();

  // rtk api
  const [updateQuranLSUser] = useUpdateQuranLSUserMutation();

  const updateStatus = async (newStatus: string) => {
    try {
      // Replace this URL with your actual backend endpoint
      const res = await updateQuranLSUser({
        studentId,
        updatedData: { status: newStatus },
      }).unwrap();

      toast({
        title: "Success!!",
        description: res.message,
        duration: 3000,
        className: "bg-green-600 text-white",
      });
    } catch (error: any) {
      console.error("Error updating status:", error);
      toast({
        variant: "destructive",
        title: "something went wrong!",
        description: error?.data?.errorSources[0].message || "Try again.",
        duration: 3000,
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="hover:bg-transparent hover:text-current"
      >
        <Button variant="ghost" size="icon">
          <Ellipsis className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={currentStatus}
          onValueChange={updateStatus}
        >
          <DropdownMenuRadioItem
            value="default"
            className={`${
              currentStatus === "default" ? "text-green-500" : ""
            } cursor-pointer`}
          >
            Default
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="waiting"
            className={`${
              currentStatus === "waiting" ? "text-green-500" : ""
            } cursor-pointer`}
          >
            Waiting
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="completed"
            className={`${
              currentStatus === "completed" ? "text-green-500" : ""
            } cursor-pointer`}
          >
            Completed
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusChangeDropdown;
