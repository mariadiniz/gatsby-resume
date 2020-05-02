import React from "react"
import * as S from './styled'
import Avatar from "../../atoms/Avatar"
import Profile from "../../atoms/Profile"
import SocialIcons from "../../atoms/SocialIcons"

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderAvatarWrapper>
      <Avatar />
    </S.HeaderAvatarWrapper>

    <S.HeaderProfileWrapper>
      <Profile />


      <S.HeaderProfileSocialIconsWrapper>
        <SocialIcons />
      </S.HeaderProfileSocialIconsWrapper>
    </S.HeaderProfileWrapper>
  </S.HeaderWrapper>
)

export default Header