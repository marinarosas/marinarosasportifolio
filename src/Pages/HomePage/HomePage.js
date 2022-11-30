import React from 'react'
import { Header } from '../../components/Header/Header'
import {ContainerMain, HomePresent, MyName, ImageProfile} from './HomePage.styled'
import profilePhoto from '../../assets/151220462_2767890923428714_3122320711620289537_n.jpg'

export const HomePage = () => {
  return (
    <>
    <Header/>
    <ContainerMain>
            <section>
                <HomePresent>
                    <h1>
                      Olá 👋,<br></br>
                      Meu nome é<br></br>
                      <MyName>Marina Jaudy</MyName><br></br>
                      E eu sou desevolvedora web.<br></br>
                    </h1>
                </HomePresent>
                <ImageProfile>
                        <img src={profilePhoto} alt="Imagem de Perfil"/>
                </ImageProfile>
            </section>
        </ContainerMain>
    </>
  )
}
