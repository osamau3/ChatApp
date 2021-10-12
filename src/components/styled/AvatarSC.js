import styled from 'styled-components'

export const AvatarSC = styled.div`
    display: inline-block;
    float: ${({ direction }) => direction};
    img {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      margin-right: 10px;
      vertical-align: middle;
      display: inline-block;
    }
    span {
      font-weight: bold;
    }
`
