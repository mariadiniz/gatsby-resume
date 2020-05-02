import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as S from './styled'

export const Avatar = () => {
  const {profileImage} = useStaticQuery(graphql`
      query ProfileImage{
          profileImage: file(relativePath: {eq: "profile-photo.png"}){
              childImageSharp{
                  fluid(maxWidth: 400){
                      ...GatsbyImageSharpFluid_tracedSVG
                  }
              }
          }
      }
  `)

  return <S.ProfileImg fluid={profileImage.childImageSharp.fluid} />
}

export default Avatar;