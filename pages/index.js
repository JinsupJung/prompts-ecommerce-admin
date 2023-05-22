import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";
// import Image from 'next/image';

export default function Home() {
  const {data: session } = useSession();
  // console.log(session);
  if (!session) return ;

  return <Layout>
    <div className="text-blue-900 flex justify-between ">
      <h2>
      Hello, 
      <span className="pl-2 font-bold">
        {session?.user?.name}
        </span>

      </h2>
      <div className="flex bg-gray-300 text-black">
      <img src={session?.user?.image}  alt="Picture of the author" className="w-8 h-8" />
      <span className="py-1 px-2">

      {session?.user?.name}
      </span>
      </div>
    </div>
  </Layout>
}
