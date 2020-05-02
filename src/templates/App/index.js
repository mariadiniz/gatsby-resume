/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import * as S from './styled'
import Header from "../../molecules/Header"

const Layout = ({ children }) => {


  return (
    <S.MainWrapper>
      <S.GlobalStyled />

      <Header />

      { children }


    </S.MainWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
