import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  return (
    <nav className=" navbar">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">
            <button className="font-sans text-2xl inline-block rounded-md py-3 px-4 bg-gray-900 text-white">
              FEED
            </button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white">
                Log in
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
