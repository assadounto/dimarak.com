import React, { Suspense } from "react";
import type { Metadata } from "next";




export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <section>
        <Suspense fallback={<div className="mt-[50px]">loading</div>}>
          <section className="mt-20">{children}</section>
        </Suspense>
      </section>
    );
}
