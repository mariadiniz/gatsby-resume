import React from "react"
import {Github, Facebook, Twitter} from 'styled-icons/boxicons-logos'
import { graphql, useStaticQuery } from "gatsby"
import * as S from './styled'
import { SocialIconsListItemLink } from "./styled"

const SocialIcons = () => {
  const {site: {siteMetadata: {contacts: {social}}}} = useStaticQuery(
    graphql`
      query {
          site {
              siteMetadata {
                  contacts{
                      social{
                          github
                          facebook
                          twitter
                      }
                  }
              }
          }
      }
  `)

  return (
    <S.SocialIcons>
      <S.SocialIconsList>
        <S.SocialIconsListItem>
          <SocialIconsListItemLink target={'_blank'} href={social.github} rel={'noreferrer noopener'}>
            <Github size={26}/>
          </SocialIconsListItemLink>
        </S.SocialIconsListItem>

        <S.SocialIconsListItem>

          <SocialIconsListItemLink target={'_blank'} href={social.facebook} rel={'noreferrer noopener'}>
            <Facebook size={26}/>
          </SocialIconsListItemLink>
        </S.SocialIconsListItem>

        <S.SocialIconsListItem>
          <SocialIconsListItemLink target={'_blank'} href={social.twitter} rel={'noreferrer noopener'}>
            <Twitter size={26}/>
          </SocialIconsListItemLink>
        </S.SocialIconsListItem>

      </S.SocialIconsList>
    </S.SocialIcons>
  )
}

export default SocialIcons