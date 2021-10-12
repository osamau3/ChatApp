import styled from 'styled-components'

export const ChatFooterSC = styled.div`
    height: 45px;
    width: 100%;
    border-top: 1px solid #dfdfdf;
    position: fixed;
    bottom: 0;
    padding: 20px;
    background: #fff;
    z-index: 100;
    transition: all ease-in-out .3s;
    input {
      min-width: calc(100% - 165px);
      box-shadow: none;
      border: none;
      outline: none;
      transition: all ease-in-out .3s;
      &:focus, &:focus-visible {
        border: none;
        outline: none;
      }
    }
    button {
      width: 125px;
      height: 45px;
      border: none;
      border-radius: 5px;
      background: #267bd5;
      color: #fff;
      cursor: pointer;
      transition: all ease-in-out .3s;
    }
    button.disabled {
      cursor: not-allowed;
      background: #c3c3c3;
    }
`
