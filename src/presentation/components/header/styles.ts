import styled, { css } from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: center;
    background-color: #003580;
    color: white;
    position: relative;
`

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0 100px 0;
`

export const HeaderList = styled.ul`
    display: flex;
    gap: 40px;
    padding-inline-start:0;
`

export const HeaderListItem = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 10px;

    ${({ active }) => active && css`
        border: 1px solid white;
        padding:10px; 
        border-radius: 12px;
    `} 
`

export const HeaderContent = styled.div`
    margin-top:3rem;
`

export const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
`

export const HeaderSubtitle = styled.h3`
    font-size: 16px;
    margin: 1.2rem 0;
`

export const HeaderButton = styled.button`
    margin-top:1rem;
    font-weight: bold;
    padding: 0.8rem 2rem;
    color: white;
    border:0;
    background-color: #0071c2;
    text-transform: uppercase;
    cursor: pointer;
`

export const HeaderSearch = styled.div`
    height: 3.3rem;
    background-color: white;
    width: 100%;
    border: 3px solid #febb02;
    border-radius: 5px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: -25px;
    max-width: 1024px;

    .headerIcon{
       color: lightgray;
       cursor: pointer;
    }

    .date{
        position: absolute;
        top: 50px;
    }
`

export const HeaderSearchItem =  styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
`

export const Span =  styled.div`
    color: lightgray;
    cursor: pointer;
`

export const Input = styled.input`
    border: 0;
    outline: 0;
`

export const OptionCounterButton = styled.button`
    margin: 0 10px;
    height: 30px;
    width: 30px;
    border: 1px solid #0071c2;
    color: #0071c2;
    cursor: pointer;
    background-color: white;
`
export const Option = styled.div`
    position: absolute;
    top: 40px;
    background-color: white;
    color: gray;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`

export const OptionCounter = styled.div`
    display: flex;
`

export const OptionItem =  styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-between;
    margin: 10px;
`



export const SpanOptionItem =  styled.span``

export const OptionCounterNumber =  styled.div`
    color: black;
`