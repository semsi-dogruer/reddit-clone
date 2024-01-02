import { fetchUser } from "@/lib/fetchUser.js";
import Link from "next/link";
import Logout from "./Logout.jsx";
import Image from "next/image";

export default async function Navbar() {
  const user = await fetchUser();
  return (
    <div className='navbar'>
      <Image src='/logo.png' alt='Logo' width={70} height={70} />
      <h3>the front page of the internet</h3>
      <Link href={"/"}>Home</Link>
      <Link href={"/subreddits"}>Subreddits</Link>
      {user.id && (
        <>
          <Logout />
          <span>Welcome {user.username}</span>
        </>
      )}
      {!user.id && (
        <>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </>
      )}
    </div>
  );
}
