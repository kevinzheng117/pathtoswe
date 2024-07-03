"use client";

import SideNav from "@/app/ui/navigation/sidenav";
import Footer from "@/app/ui/footer";
import ScrollButton from "@/app/ui/scroll_button";
import { useRef, useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (footerRef.current) {
      setOffset(footerRef.current.offsetTop);
    }
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <SideNav />
        <div className="flex-grow px-6 md:overflow-y-auto md:px-12 md:pt-12">
          {children}
          <div className="mt-auto absolute w-full bottom-0 left-0">
            <ScrollButton footerOffset={offset} />
          </div>
          <div ref={footerRef} className="mx-[-24px] md:mx-[-48px] md:mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
