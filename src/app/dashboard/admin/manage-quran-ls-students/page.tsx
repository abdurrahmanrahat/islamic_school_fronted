"use client";

import { Loader } from "@/components/shared/Ui/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetQuranLSUsersQuery } from "@/redux/api/quran-lsApi";
import { TQuranLSUser } from "@/types/quran-ls.type";
import { Ellipsis } from "lucide-react";

const ManageQuranLSStudent = () => {
  const { data: quranLSStudents, isLoading } = useGetQuranLSUsersQuery({});
  console.log(quranLSStudents);

  if (isLoading) {
    return <Loader text="Loading..." />;
  }

  return (
    <div className="p-6 min-h-screen">
      <div>
        {quranLSStudents?.data.length > 0 ? (
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-base text-black font-medium">
                  Username
                </TableHead>

                <TableHead className="text-base text-black font-medium">
                  Payment Method
                </TableHead>
                <TableHead className="text-base text-black font-medium">
                  Payment Digits
                </TableHead>
                <TableHead className="text-base text-black font-medium">
                  Phone Number
                </TableHead>
                <TableHead className="text-base text-black font-medium">
                  Batch
                </TableHead>
                <TableHead className="text-base text-black font-medium">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quranLSStudents?.data.map((user: TQuranLSUser) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">{user.userName}</TableCell>
                  <TableCell>{user.paymentMethod}</TableCell>
                  <TableCell>{user.RegFeeNumber}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                  <TableCell>{user.batchNo}</TableCell>
                  <TableCell>
                    <Ellipsis />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex justify-center items-center h-screen w-full">
            <h2 className="text-2xl font-semibold">Empty Registration</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageQuranLSStudent;
