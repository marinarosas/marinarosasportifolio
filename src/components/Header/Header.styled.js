import styled from "styled-components";

export const ContainerHeader = styled.header`
    border: 2px solid blue;
    color: #666666;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 55px;
`

export const LogoImage = styled.div`
    border: 2px solid yellow;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button{
    background: -webkit-linear-gradient(#13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: rgb(0, 0, 0, 0);
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 40px;
    font-weight: bold;
    }
`

export const MenuNav = styled.div`
    border: 2px solid red;
    width:610px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;

    button{
        background-color: rgb(0, 0, 0, 0);
        border: none;
        font-family: 'DM Sans', sans-serif;
        font-size: 20px;
        text-decoration: none;
        color: inherit;
    }

    button:hover{
        background-color: lightgray; 
    }
`
 export const IconsHeader = styled.div` 
    border: 2px solid black;
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: inherit;
 `