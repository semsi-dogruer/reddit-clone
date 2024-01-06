// CreateSubredditButton.js
"use client";

import { useState } from "react";

const CreateSubredditButton = ({ isLoggedIn, onUpdateSubreddits }) => {
  const [subredditName, setSubredditName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateSubreddit = async () => {
    if (!isLoggedIn) {
      setErrorMessage("Please log in to create a subreddit!");
      return;
    }

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

export default CreateSubredditButton;
