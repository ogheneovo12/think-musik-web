"use client";

import { Flowbite, useThemeMode } from "flowbite-react";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { theme } from "./theme";

const FlowbiteProvider: FC<PropsWithChildren> = function ({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    let dark = localStorage.getItem("theme") === "dark";
    setDark(dark);
  }, []);
  return <Flowbite theme={{ theme: theme, dark }}>{children}</Flowbite>;
};

export default FlowbiteProvider;
