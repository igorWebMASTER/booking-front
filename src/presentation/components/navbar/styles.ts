import styled from 'styled-components';

export const NavBar = styled.nav`
    height: 60px; 
    background-color: #003580;
    display: flex;
    justify-content: center;
`
export const NavBarContainer = styled.div`	
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const NavBarLogo = styled.span`
    color: white;
`

export const NavBarItem = styled.div`	
    color: white;
    display: flex;
    gap: 20px;
`

export const NavBarLink = styled.div`	
    width: 100%;
    max-width: 1024px;
    color: white;
`

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 20px;
    margin-top: 20px;
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: white;
    border:0;
    display: table-cell;
    padding-left: 4px;
    cursor: pointer;
    color: white;
    background-color: #003580;
`