// CreateSubredditButton.js
"use client";

import { useRouter } from "next/navigation.js";
import { useState } from "react";

const NewSubreddit = ({ user }) => {
  const [subredditName, setSubredditName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleCreateSubreddit = async () => {
    if (!user) {
      setErrorMessage("Please log in to create a subreddit!");
      return;
    }
    console.log("add subreddit");
    const response = await fetch(`/api/subreddits`, {
      method: "POST",
      body: JSON.stringify({
        name: subredditName,
      }),
    });
    router.refresh();

    try {
      // ... (rest of the code remains unchanged)
    } catch (error) {
      setErrorMessage(
        `An error occurred during subreddit creation: ${error.message}`
      );
    }
  };

  return (
    <div>
      <input
        type='text'
        value={subredditName}
        onChange={(e) => setSubredditName(e.target.value)}
        placeholder='Enter subreddit name'
      />
      <button onClick={handleCreateSubreddit}>Create Subreddit</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default NewSubreddit;
