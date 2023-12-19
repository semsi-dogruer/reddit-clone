import Link from "next/link";

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link href={"/"}>Home</Link>
      <Link href={"/subreddits"}>Subreddits</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/logout"}>Logout</Link>
    </div>
  );
}
