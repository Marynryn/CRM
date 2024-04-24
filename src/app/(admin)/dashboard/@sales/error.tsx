"use client";

import React from "react";

export interface ErrorComponentProps {
  error: Error;
}
export default function Error({ error }: ErrorComponentProps) {
  return <div>Unexpected error inside slots sale</div>;
}
