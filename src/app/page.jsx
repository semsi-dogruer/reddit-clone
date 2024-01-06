import { fetchUser } from "@/lib/fetchUser.js";

export default function Home() {
  const user = fetchUser();
  return <div>Dive into anything!</div>;
}
