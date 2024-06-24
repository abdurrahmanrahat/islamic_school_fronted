"use server";

import { FieldValues } from "react-hook-form";
import { setAccessToken } from "./setAccessToken";

export const loginUser = async (userData: FieldValues) => {
  const res = await fetch(`${process.env.BACKED_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    cache: "no-store",
  });
  const userInfo = await res.json();

  if (userInfo?.token) {
    setAccessToken(userInfo.token);
  }

  return userInfo;
};
