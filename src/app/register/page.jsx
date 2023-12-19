"use client";
import { useState } from "react";
export default function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    console.log(username, password);
    const res = await fetch(`${API}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const info = await res.json();
    alert(info.error);
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          placeholder='Username'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
          type='password'
        />
        <button>Register</button>
      </form>
      register
    </div>
  );
}
