import styled from "styled-components"
import {
    Link
} from "react-router-dom"

export const Nav = styled.nav `
  background: ${({ active }) =>
        active
            ? "#2F80ED"
            : ""};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
`
export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 5vw;
  height: 80px;
  z-index: 1;
  max-width: 1400px;
  width: 100%;
`

export const NavLogo = styled(Link)
`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled.img `
  width: 60px;
`


export const MobileIcon = styled.div `
  display: none;
  color: white;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background:#2F80ED;
  }
`

export const NavItem = styled.li `
  height: 80px;
  min-width: 200px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)
`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    overflow: hidden;
    &:hover {
      color: #ffffff;
      transition: all 0.3s ease;
    }
  }
  font-weight: bolder;
`