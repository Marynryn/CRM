import Header from "@/app/components/header";
import React from "react";

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard Page/ New companies</Header>
      <div>Some info</div>
    </>
  );
}
