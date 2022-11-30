import React, { useState } from 'react'
import { ContainerHeader, LogoImage, MenuNav, IconsHeader } from './Header.styled'
import {goToHomePage, goToAboutPage, goToTechStackPage, goToProjectsPage, goToContactPage} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
import gitHubIcon from '../../icon/gitbhubicon.svg'
import linkedinIcon from '../../icon/linkedinicon.svg'
import twitterIcon from '../../icon/twittericon.svg'

export const Header = () => {

    const navigate = useNavigate()
    const [logoMj, setLogoMj] = useState("{MJ}")

    return (
        <ContainerHeader>
            <LogoImage>
                <button onClick={()=>goToHomePage(navigate)}>{logoMj}</button>
            </LogoImage>

            <MenuNav>
            <button onClick={() => goToHomePage(navigate)}>Home Page</button>
            <button onClick={() => goToAboutPage(navigate)}>About Page</button>
            <button onClick={() => goToTechStackPage(navigate)}>Tech Stack</button>
            <button onClick={() => goToProjectsPage(navigate)}>Projects</button>
            <button onClick={() => goToContactPage(navigate)}>Contact</button>
            </MenuNav>

            <IconsHeader>
                <a href="https://github.com/marinarosas" target="_blank">
                    <img src={gitHubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/marina-jaudy-599b11a9/" target="_blank">
                    <img src={linkedinIcon} alt="Likedin Icon" />
                </a>
                <a href="#" target="_blank">
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
            </IconsHeader>
        </ContainerHeader>
    )
}
