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

const ManageQuranLSStudent = () => {
  const { data: quranLSStudents, isLoading } = useGetQuranLSUsersQuery({});
  console.log(quranLSStudents);

  if (isLoading) {
    return <Loader text="Loading..." />;
  }

  return (
    <div className="p-6">
      <div>
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-base text-black font-medium">
                Username
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Email
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Gender
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Profession
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Phone Number
              </TableHead>
              <TableHead className="text-base text-black font-medium">
                Batch
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quranLSStudents.data.map((user: TQuranLSUser) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user.userName}</TableCell>
                <TableCell>{user.userEmail}</TableCell>
                <TableCell>{user.userGender}</TableCell>
                <TableCell>{user.profession}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.batchNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageQuranLSStudent;
