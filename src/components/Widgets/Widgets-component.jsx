import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";

import * as S from "./Widgets-styles";

const Widgets = () => {
  return (
    <S.Container>
      <S.WidgetsInput>
        <S.WidgetSearchIcon />
        <input placeholder="Search Twitter" type="text" />
      </S.WidgetsInput>

      <S.WidgetContainer>
        <S.WidgetContainerTitle>What's happening</S.WidgetContainerTitle>
        <TwitterTweetEmbed tweetId={"1402320383932502021"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Elliot"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://atharvadeosthale.com"}
          options={{ text: "React Developer" }}
        />
      </S.WidgetContainer>
    </S.Container>
  );
};

export default Widgets;
