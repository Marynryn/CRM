import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main>
      <div className="p-8 border-2 w-96 m-auto my-8 text-center rounded-xl border-slate-30 shadow-md">
        {" "}
        <h1 className="text-3xl ">CRM</h1>
        <Link href={"/dashboard"}>
          <button className="py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded hover:bg-gray-800 active:bg-gray-950 my-8">
            Go to dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
