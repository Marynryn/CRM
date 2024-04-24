"use client";

import Link from "next/link";
import React from "react";

export interface NotFoundProps {}

export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Something went wrong!</p>
      <Link href="/companies" className="text-blue-500">
        Back to
      </Link>
    </div>
  );
}
