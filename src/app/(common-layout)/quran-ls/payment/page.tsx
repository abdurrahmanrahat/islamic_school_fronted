"use client";

import ISForm from "@/components/shared/Forms/ISForm";
import ISInput from "@/components/shared/Forms/ISInput";
import ISRadio from "@/components/shared/Forms/ISRadio";
import Container from "@/components/shared/Ui/Container";
import { FieldValues } from "react-hook-form";

const QuranLSPayment = () => {
  const handleRegPayment = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Container>
      <div className="min-h-screen">
        <h2 className="mt-20 text-xl md:text-2xl font-medium text-center">
          আপনি এই{" "}
          <span className="italic text-primary font-semibold">01788880835</span>{" "}
          নাম্বারে রেজিষ্ট্রেশন ফি{" "}
          <span className="italic text-primary font-semibold">৩০০</span> টাকা
          বিকাশ/নগদ থেকে সেন্ড মানি করুন
        </h2>

        {/* form */}
        <div className="max-w-[980px] mx-auto my-16 px-4">
          <ISForm
            onSubmit={handleRegPayment}
            defaultValues={{
              paymentMethod: "",
              RegFeeNumber: "",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* submit button */}
            <div className="mt-8 flex justify-center items-center">
              <input
                type="submit"
                value="Submit"
                className="custom_button bg-primary text-white font-medium text-[17px]"
              />
            </div>
          </ISForm>
        </div>
      </div>
    </Container>
  );
};

export default QuranLSPayment;
