"use client";

import ISForm from "@/components/Shared/Forms/ISForm";
import ISInput from "@/components/Shared/Forms/ISInput";
import Container from "@/components/Ui/Container";

const LoginPage = () => {
  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <div className="relative w-full max-w-[420px] mx-auto h-screen flex justify-center items-center">
        <div className="relative w-full h-auto bg-primary text-white py-16 px-8 text-center rounded-lg">
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
                  Email
                </label>
                <ISInput
                  name="email"
                  type="email"
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
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
