import styled from "styled-components"

export const SocialIcons = styled.nav`

`

export const SocialIconsList = styled.ul`
  display: flex;
  justify-content: flex-start;
`

export const SocialIconsListItem = styled.li`

  &+ li{
    margin-left: 24px;
  }
`

export const SocialIconsListItemLink = styled.a`
  font-size: 14px;
  color: firebrick;
`