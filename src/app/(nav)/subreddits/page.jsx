export const dynamic = "force-dynamic";
import NewSubreddit from "@/components/NewSubreddit.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";

export default async function Subreddits() {
  const subreddits = await prisma.subreddit.findMany();
  const user = await fetchUser();
  console.log(subreddits);
  return (
    <div>
      <h1>Subreddits</h1>
      {user && <NewSubreddit user={user} />}
      {subreddits.map((subreddit) => (
        <div key={subreddit.id}>
          <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
        </div>
      ))}
    </div>
  );
}
