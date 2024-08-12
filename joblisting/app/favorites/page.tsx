"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import Favorite from "../component/bookmark";

const Page = () => {
  return (
    <SessionProvider>
      <Favorite />
    </SessionProvider>
  );
};

export default Page;
