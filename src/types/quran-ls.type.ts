export type TQuranLSUser = {
  _id: string;
  userName: string;
  userEmail: string;
  userGender: "male" | "female";
  dateOfBirth: string;
  profession: string;
  address: string;
  phoneNumber: string;
  whatsAppNumber: string;
  batchNo: string;
  paymentMethod: string;
  RegFeeNumber: string;
  createdAt: string;
  updatedAt: string;
  status: "default" | "completed" | "waiting";
  __v: number;
};
