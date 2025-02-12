"use client";

import ISForm from "@/components/shared/Forms/ISForm";
import ISInput from "@/components/shared/Forms/ISInput";
import Container from "@/components/shared/Ui/Container";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/services/actions/loginUser";
import { registerUser } from "@/services/actions/registerUser";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    try {
      const res = await registerUser(values);

      if (res.success) {
        toast({
          title: "Success!!",
          description: res.message,
          duration: 3000,
          className: "bg-green-600 text-white",
        });

        // auto login after user register
        const userRes = await loginUser({
          email: values.email,
          password: values.password,
        });

        if (userRes.success) {
          storeUserInfo({ accessToken: userRes.data });
          router.push("/");
        }
      } else {
        toast({
          variant: "destructive",
          title: "something went wrong!",
          description: res.message || "Try again.",
          duration: 3000,
        });
      }
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "something went wrong!",
        description: error?.data?.errorSources[0].message || "Try again.",
        duration: 3000,
      });
    }
  };

  return (
    <Container>
      <div className="relative w-full max-w-[420px] mx-auto h-auto min-h-screen mt-6 flex justify-center items-center">
        <div className="relative w-full h-auto bg-primary text-white py-8 px-8 text-center rounded-lg">
          <h2 className="custom_sub_heading font-semibold mb-4">Sign Up</h2>
          <ISForm
            onSubmit={handleRegister}
            defaultValues={{
              name: "",
              email: "",
              phone: "",
              password: "",
            }}
          >
            <div className="space-y-4">
              {/* name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-start font-medium mb-[2px]"
                >
                  Name
                </label>
                <ISInput
                  name="name"
                  className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black"
                  placeholder="Enter email address or phone number"
                />
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-start font-medium mb-[2px]"
                >
                  Email
                </label>
                <ISInput
                  name="email"
                  type="email"
                  className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black"
                  placeholder="Enter email address or phone number"
                />
              </div>

              {/* phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-start font-medium mb-[2px]"
                >
                  Phone
                </label>
                <ISInput
                  name="phone"
                  type="number"
                  className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black"
                  placeholder="Enter email address or phone number"
                />
              </div>

              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-start font-medium mb-[2px]"
                >
                  Password
                </label>
                <ISInput
                  name="password"
                  type="password"
                  className="w-full block py-[10px] px-3 rounded text-[15px] focus:outline-none text-black"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* submit button */}
            <div className="mt-8">
              <input
                type="submit"
                value="Sign Up"
                className="custom_button w-full bg-secondary font-medium text-[17px]"
              />
            </div>
          </ISForm>

          {/* login link */}
          <div className="mt-8">
            <p className="px-6 text-sm text-center text-gray-200">
              Already have an account yet?{" "}
              <Link
                href="/login"
                className="hover:underline duration-300 hover:text-secondary text-gray-200"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;
