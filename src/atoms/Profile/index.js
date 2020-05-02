import React from "react"
import * as S from './styled'
import { graphql, useStaticQuery } from "gatsby"

const Profile = () => {
  const {site: {siteMetadata: {title, position, contacts}}} = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title,
                  position,
                  contacts{
                      phone_number
                  }
              }
          }
      }
  `)


  return (
    <S.ProfileWrapper>
      <S.Title>{title}</S.Title>
      <S.Position>{position}</S.Position>
    </S.ProfileWrapper>
  )
}

export default Profile