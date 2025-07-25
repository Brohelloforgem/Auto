import { signIn, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button disabled className="px-6 py-3 bg-gray-400 rounded-lg">Loading...</button>;
  }
  if (session) {
    return (
      <div className="flex items-center gap-4">
        <img src={session.user.image} alt="user" className="w-8 h-8 rounded-full" />
        <span>{session.user.name}</span>
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-green-600 rounded"
          disabled
        >
          Signed in
        </button>
      </div>
    );
  }

  return (
    <button
      className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 transition"
      onClick={() => signIn("google")}
    >
      Sign in with Google
    </button>
  );
}
