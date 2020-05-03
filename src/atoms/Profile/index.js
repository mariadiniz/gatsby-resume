import React from "react"
import * as S from './styled'
import { graphql, useStaticQuery } from "gatsby"

const Profile = () => {
  const {site: {siteMetadata: {title, position, contacts: {email}}}} = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title,
                  position,
                  contacts{
                      email
                  }
              }
          }
      }
  `)


  return (
    <S.ProfileWrapper>
      <S.Title>{title}</S.Title>
      <S.Position>{position}</S.Position>
      <S.ContactEmail href={`mailto:${email}`}>{email}</S.ContactEmail>
    </S.ProfileWrapper>
  )
}

export default Profile