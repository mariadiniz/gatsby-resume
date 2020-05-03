import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint'

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size: 46px;
    margin-bottom: 12px;
    text-align: center;
    
    ${breakpoint('tablet')`
        font-size: 64px;
        text-align: left;
        margin-bottom: 24px;
    `}
`

export const Position = styled.small`
    font-size: 15px;
    text-align: center;
    
    ${breakpoint('tablet')`
        text-align: left;
        font-size: 18px;
    `}
`