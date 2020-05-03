import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint'
export const HeaderWrapper = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 30px 0;
  justify-content: center;
  ${breakpoint('tablet')`
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    box-shadow:0 1rem 3rem rgba(0,0,0,.175)
  `}
  
`

export const HeaderAvatarWrapper = styled.div`
  margin-right: 0;
  margin-bottom: 70px;
  width: 100%;
  max-width: 260px;
  
  ${breakpoint('tablet')`
    margin-right: 80px;
    max-width: 400px;
    height: auto;
  `}
`

export const HeaderProfileWrapper = styled.div`
  
`

export const HeaderProfileSocialIconsWrapper = styled.div`

  display: flex;
  justify-content: center;
  margin-top: 20px;
  ${breakpoint('tablet')`
    justify-content: flex-start;
  `}
`