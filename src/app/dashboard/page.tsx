import React from 'react';

export interface PageProps {
  children?: React.ReactNode;
}
export default function Page({ children }: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
    </main>
  );
}
