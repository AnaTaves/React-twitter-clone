import React from "react";
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat
} from "@material-ui/icons";

import * as S from "./Post-style";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <S.PostContainer>
      <S.PostAvatar>
        <Avatar src={avatar} />
      </S.PostAvatar>
      <S.PostBody>
        <div className="post__header">
          <div className="post__headerText">
            <S.PostHeaderText>
              {displayName}{" "}
              <S.PostHeaderSpecial>
                {verified && <S.PostBadge />} @{username}
              </S.PostHeaderSpecial>
            </S.PostHeaderText>
          </div>
          <S.PostHeaderDescription>
            <p>{text}</p>
          </S.PostHeaderDescription>
        </div>
        <S.Image src={image} alt="" />
        <S.PostFooter>
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </S.PostFooter>
      </S.PostBody>
    </S.PostContainer>
  );
};

export default Post;
