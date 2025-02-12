"use client";

import ISDatePicker from "@/components/shared/Forms/ISDatePicker";
import ISForm from "@/components/shared/Forms/ISForm";
import ISInput from "@/components/shared/Forms/ISInput";
import ISRadio from "@/components/shared/Forms/ISRadio";
import { useToast } from "@/hooks/use-toast";
import { useAddQuranLSUserRegistrationMutation } from "@/redux/api/quran-lsApi";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const quranLSRegistrationDefaultValues = {
  userName: "",
  userEmail: "",
  userGender: "",
  dateOfBirth: "",
  profession: "",
  address: "",
  phoneNumber: "",
  whatsAppNumber: "",
  paymentMethod: "",
  RegFeeNumber: "",
};

const QuranLSRegistration = () => {
  const { toast } = useToast();
  const router = useRouter();

  // redux api
  const [addQuranLSUserRegistration] = useAddQuranLSUserRegistrationMutation();

  const handleQuranLSRegistration = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await addQuranLSUserRegistration(values).unwrap();

      if (res.success) {
        toast({
          title: "Success!!",
          description: res.message,
          duration: 3000,
          className: "bg-green-600 text-white",
        });

        // navigate user
        router.push("/quran-ls/success");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "something went wrong!",
        description: error?.data?.errorSources[0].message || "Try again.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <h2 className="mt-10 text-xl md:text-2xl font-semibold text-center">
        কুরআন শিক্ষার আসর - ২
      </h2>
      <div className="max-w-[980px] mx-auto my-16 px-4">
        <ISForm
          onSubmit={handleQuranLSRegistration}
          defaultValues={quranLSRegistrationDefaultValues}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* name */}
            <div>
              <label
                htmlFor="userName"
                className="block text-start font-medium mb-[2px]"
              >
                আপনার নাম <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISInput
                name="userName"
                className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                placeholder=""
              />
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="userEmail"
                className="block text-start font-medium mb-[2px]"
              >
                ইমেইল লিখুন *
              </label>
              <ISInput
                name="userEmail"
                type="email"
                className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                placeholder=""
              />
            </div>

            {/* gander */}
            <div>
              <label
                htmlFor="userGender"
                className="block text-start font-medium mb-[4px]"
              >
                জেন্ডার <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISRadio
                name="userGender"
                options={[
                  { value: "male", label: "মেইল" },
                  { value: "female", label: "ফিমেইল" },
                ]}
                className="flex gap-6"
              />
            </div>

            {/* date of birth */}
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-start font-medium mb-[2px]"
              >
                জন্ম তারিখ <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISDatePicker
                placeholder="Pick Your Birthday"
                name="dateOfBirth"
                className="border p-2 rounded"
                // className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary"
              />
            </div>

            {/* profession */}
            <div>
              <label
                htmlFor="profession"
                className="block text-start font-medium mb-[2px]"
              >
                পেশা <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISInput
                name="profession"
                className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                placeholder=""
              />
            </div>

            {/* address */}
            <div>
              <label
                htmlFor="address"
                className="block text-start font-medium mb-[2px]"
              >
                ঠিকানা <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISInput
                name="address"
                className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                placeholder=""
              />
            </div>

            {/*"phoneNumber */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-start font-medium mb-[2px]"
              >
                মেবাইল নাম্বার{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISInput
                name="phoneNumber"
                type="number"
                className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                placeholder=""
              />
            </div>

            {/* WhatsAppNumber */}
            <div>
              <label
                htmlFor="whatsAppNumber"
                className="block text-start font-medium mb-[2px]"
              >
                হোয়াটসঅ্যাপ নাম্বার{" "}
                <span className="text-red-600 font-semibold">*</span>
              </label>
              <ISInput
                name="whatsAppNumber"
                type="number"
                className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                placeholder=""
              />
            </div>
          </div>

          <div className="mt-14">
            <h2 className=" text-lg md:text-xl font-medium text-center mb-8">
              আপনি এই{" "}
              <span className="italic text-primary font-semibold">
                01788880835
              </span>{" "}
              নাম্বারে রেজিষ্ট্রেশন ফি{" "}
              <span className="italic text-primary font-semibold">৩০০</span>{" "}
              টাকা বিকাশ/নগদ থেকে সেন্ড মানি করুন
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* gander */}
              <div>
                <label
                  htmlFor="paymentMethod"
                  className="block text-start font-medium mb-[4px]"
                >
                  আপনি কোন মাধ্যমে ফি পাঠিয়েছেন?{" "}
                  <span className="text-red-600 font-semibold">*</span>
                </label>
                <ISRadio
                  name="paymentMethod"
                  options={[
                    { value: "bkash", label: "বিকাশ" },
                    { value: "nagad", label: "নগদ" },
                    { value: "bank", label: "ব্যাংক" },
                  ]}
                  className="flex gap-6"
                />
              </div>

              {/*"phoneNumber */}
              <div>
                <label
                  htmlFor="RegFeeNumber"
                  className="block text-start font-medium mb-[2px]"
                >
                  যে নাম্বার থেকে রেজি ফি পাঠিয়েছেন সেই নাম্বার টি লিখুন /
                  ব্যাংক একাউন্টের শেষ ৬ ডিজিট লিখুন{" "}
                  <span className="text-red-600 font-semibold">*</span>
                </label>
                <ISInput
                  name="RegFeeNumber"
                  //   type="number"
                  className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black border border-primary-100"
                  placeholder=""
                />
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="mt-8 flex justify-center items-center">
            <input
              type="submit"
              value="Registration"
              className="custom_button bg-primary text-white font-medium text-[17px]"
            />
            {/* <Button type="submit" asChild size="lg">
              Registration
            </Button> */}
          </div>
        </ISForm>
      </div>
    </div>
  );
};

export default QuranLSRegistration;
