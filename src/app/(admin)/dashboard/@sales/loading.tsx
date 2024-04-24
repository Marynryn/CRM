import React from "react";

export interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <>
      <div className="ml-60">Loading...</div>
    </>
  );
}
