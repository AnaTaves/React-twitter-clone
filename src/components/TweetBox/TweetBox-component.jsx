import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { Avatar } from "@material-ui/core";

import * as S from "./TweetBox-style";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "mr.robot",
      displayName: "Elliot",
      avatar: "https://avatars.dicebear.com/api/gridy/54.svg",
      verified: true,
      text: tweetMessage
    });

    setTweetMessage("");
  };

  const handleChange = (e) => {
    let myString = e.target.value;
    setTweetMessage(myString);
    setCharacterCount(myString.length);
  };

  return (
    <S.TweetBoxContainer>
      <S.TweetBoxForm>
        <S.TweetBoxInput>
          <Avatar src="https://avatars.dicebear.com/api/gridy/54.svg" />
          <textarea
            value={tweetMessage}
            onChange={handleChange}
            maxLength={400}
            placeholder="What's on your mind?"
            type="text"
          />
        </S.TweetBoxInput>
        <S.CharacterCount>Character count: {characterCount}</S.CharacterCount>

        <S.TweetBoxButton onClick={sendTweet} type="submit">
          Tweet
        </S.TweetBoxButton>
      </S.TweetBoxForm>
    </S.TweetBoxContainer>
  );
};

export default TweetBox;
