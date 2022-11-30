import styled from "styled-components";

export const ContainerMain = styled.main`
    min-height: calc(100vh - 55px);
    display: flex;
    align-items: center;
    

    section{
        display: flex;
        justify-content: space-between;
    }
`
export const HomePresent = styled.div`
    flex-grow: 1;
     display: flex;
     flex-direction: column;
     align-items: center;
     font-family: 'Poppins', sans-serif;
     color: #42446e;
     font-size: 26px;
     justify-content: space-between;
`

export const MyName = styled.span`
    background: -webkit-linear-gradient(#13B0F5, #E70FAA);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
`

export const ImageProfile = styled.div`
    border-radius: 50%;
    background: linear-gradient( #E70FAA, #00C0FD);
    -webkit-text-fill-color: transparent;
    height: 350px;
    width: 350px;

    img{
        border-radius: 50%;
     padding: 11px;
     height: 350px;
     width: 350px;
     filter: grayscale(100%)
    }
`