import { prisma } from "@/lib/prisma.js";
import Link from "next/link.js";

export default async function Subreddits() {
  const subreddits = await prisma.subreddit.findMany();
  console.log(subreddits);
  return (
    <div>
      <h1>Subreddits</h1>
      <button>Create A New Subreddit</button>
      {subreddits.map((subreddit) => (
        <div key={subreddit.id}>
          <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
        </div>
      ))}
    </div>
  );
}
