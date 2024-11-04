"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    )
  );
};

export default Theme;
