"use client";

import ISForm from "@/components/shared/Forms/ISForm";
import ISInput from "@/components/shared/Forms/ISInput";
import Container from "@/components/shared/Ui/Container";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      if (res.success) {
        toast.success(res.message);
        storeUserInfo({ accessToken: res.token });
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <div className="relative w-full max-w-[420px] mx-auto h-auto min-h-screen flex justify-center items-center">
        <div className="relative w-full h-auto bg-primary text-white py-8 px-8 text-center rounded-lg">
          <h2 className="custom_sub_heading font-semibold mb-4">Login</h2>
          <ISForm
            onSubmit={handleLogin}
            defaultValues={{
              email: "",
              password: "",
            }}
          >
            <div className="space-y-4">
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-start font-medium mb-[2px]"
                >
                  Email or Number
                </label>
                <ISInput
                  name="email"
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
                value="Login"
                className="custom_button w-full bg-secondary font-medium text-[17px]"
              />
            </div>
          </ISForm>

          {/* google login */}
          <div className="space-y-4 mt-8">
            <div className="flex justify-center items-center space-x-2 border p-2 border-gray-300 rounded cursor-pointer">
              <FaGoogle size={26} />
              <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-200">
              Do not have an account yet?{" "}
              <Link
                href="/register"
                className="hover:underline duration-300 hover:text-secondary text-gray-200"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
