"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const onclickHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/logout', { method: 'POST' });

    if (res.ok) {
      router.push('/login');
    }
  };

  return (
    <div>
      <h1>Welcome to Products Store</h1>
      <button onClick={onclickHandler}>Logout</button>
    </div>
  );
};

export default Page;
