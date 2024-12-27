import Link from "next/link";
export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-4 text-white font-bold bg-black/50 px-16 py-8 rounded-xl">
      Todos
      <br />
      <Link className="underline border border-white p-2 rounded-md" href="/signup">Sign up Todos</Link>
      <br />
      <Link className="underline border border-white p-2 rounded-md" href="/signin">Sign in Todos</Link>
      </div>
    
    </div>
  );
}
