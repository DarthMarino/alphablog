import Link from "next/link";

export default function Custom404() {
  return (
    <main className="error-page">
      <h1>404 - That page does not seem to exist...</h1>
      <iframe
        src="https://giphy.com/embed/Ta3v3I4GI1gH7Rqek6"
        width="480"
        height="264"
        frameBorder="0"
      ></iframe>
      <Link href="/">
        <button className="btn-blue">Go home</button>
      </Link>
    </main>
  );
}
