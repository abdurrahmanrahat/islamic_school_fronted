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
import StatusChangeDropdown from "../../components/Admin/Manage-quran-ls-students/StatusChangeDropdown";

const ManageQuranLSStudent = () => {
  const { data: quranLSStudents, isLoading } = useGetQuranLSUsersQuery({});

  if (isLoading) {
    return <Loader text="Loading..." />;
  }

  return (
    <div className="p-6 min-h-screen">
      <div>
        {quranLSStudents?.data.length > 0 ? (
          <Table className="border">
            <TableHeader className="">
              <TableRow className="bg-gray-100">
                <TableHead className="text-base text-black font-semibold">
                  #
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  Username
                </TableHead>

                <TableHead className="text-base text-black font-semibold">
                  Payment Method
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  Payment Digits
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  Phone Number
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  WhatsApp
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  Batch
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  Status
                </TableHead>
                <TableHead className="text-base text-black font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quranLSStudents?.data.map(
                (user: TQuranLSUser, index: number) => (
                  <TableRow
                    key={user._id}
                    className={`${
                      user.status === "completed" &&
                      "bg-green-500 hover:bg-green-500 text-white"
                    } ${
                      user.status === "waiting" &&
                      "bg-red-400 hover:bg-red-500 text-white"
                    } `}
                  >
                    <TableCell className="font-semibold">{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {user.userName}
                    </TableCell>
                    <TableCell>{user.paymentMethod}</TableCell>
                    <TableCell>{user.RegFeeNumber}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.whatsAppNumber}</TableCell>
                    <TableCell>{user.batchNo}</TableCell>
                    <TableCell className="capitalize">{user.status}</TableCell>
                    <TableCell>
                      <StatusChangeDropdown
                        studentId={user._id}
                        currentStatus={user.status}
                      />
                    </TableCell>
                  </TableRow>
                )
              )}
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

// completed - green
// waiting - red
