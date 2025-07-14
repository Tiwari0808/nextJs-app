"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

const Page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const submitHandler = async (e) => {
  e.preventDefault();

  if (!email) return alert("Enter valid email");
  if (!password) return alert("Enter valid password");

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("API Response:", data); // 👈 debug line

    if (res.ok) {
      router.push("/");
    } else {
      alert(data?.error || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error); // 👈 catch network errors
    alert("Network or server error.");
  }
};



    return (
        <div className="flex flex-col justify-center items-center border border-amber-500 rounded-[10px] max-w-[250px] my-10 py-5">
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">Enter Email</label>
                <input value={email} required type="email" className="border border-amber-500 outline-0 text-center" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="">Enter Password</label>
                <input value={password} required type="password" className="border border-amber-500 outline-0 text-center" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="rounded-full border border-amber-500 px-3 py-1 mt-5"> Submit</button>
            </form>
        </div>
    )
}

export default Page