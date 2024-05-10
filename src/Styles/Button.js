import styled from 'styled-components'

export const Botao = styled.button`
    background-color: hsl(71, 73%, 54%);
    border: none;
    width: 240px;
    height: 40px;
    border-radius: 6px;
    color: white;
    box-shadow: 1px 9px 47px -5px rgba(8,8,8,0.75);
-webkit-box-shadow: 1px 9px 47px -5px rgba(8,8,8,0.75);
-moz-box-shadow: 1px 9px 47px -5px rgba(8,8,8,0.75);

    &:hover{
        cursor: pointer;
        margin-top: 5px;
        transition: 0.2s;
    }
`