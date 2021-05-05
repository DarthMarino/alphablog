import toast from "react-hot-toast";
import React, { useState } from "react";
import { firestore, fromMillis, postToJSON } from "../lib/firebase";
import PostFeed from "../components/postFeed";
import "../styles/Home.module.css";
import Loader from "components/loader";

// Max post to query per page
const LIMIT = 10;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup("posts")
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(LIMIT);

  const posts = (await postsQuery.get()).docs.map(postToJSON);
  // Return data as props
  return { props: { posts } };
}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor =
      typeof last.createdAt === "number"
        ? fromMillis(last.createdAt)
        : last.createdAt;

    const query = firestore
      .collectionGroup("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .startAfter(cursor);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <div className="card-container">
      <div className="card card-info">
        <h2>Alphablog</h2>
        <p>
          Welcome! This app is built with Next.js and Firebase and is inspired
          by Dev.to.
        </p>
        <p>
          Sign up for an 👨‍🎤 account, ✍️ you can write posts, then 💞 heart
          content created by other users.
        </p>
      </div>
      <PostFeed posts={posts} admin={null} />
      {!loading && !postsEnd && (
        <button onClick={getMorePosts}>Load more</button>
      )}

      <Loader show={loading} />

      {postsEnd && "You have reached the end!"}
    </div>
  );
}
