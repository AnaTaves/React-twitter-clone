import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import uuid from "react-uuid";

import * as S from "./Feed-style";

import TweetBox from "../TweetBox/TweetBox-component";
import Post from "../Post/Post-component";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <S.FeedContainer>
      <div>
        <S.FeedHeaderTitle>Home</S.FeedHeaderTitle>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={uuid()}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </S.FeedContainer>
  );
};

export default Feed;
