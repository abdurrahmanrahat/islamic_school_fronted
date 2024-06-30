"use client";

import { store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";

import { ReactNode } from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
};

export default Providers;
