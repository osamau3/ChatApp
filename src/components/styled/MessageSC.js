import styled from 'styled-components'

export const MessageSC = styled.div`
    background:${({ direction }) => direction === 'right' ? '#cfeaf9' : '#f2f2f2' };
    border-radius: 10px;
    min-width: 100px;
    padding: 10px;
    display: inline-block;
    float: ${({ direction }) => direction};
    margin-${({ direction }) => direction}: ${({ isLast, isIncomming }) => (!isLast && isIncomming) && '55px'};
    .messageContent {
      font-size: 14px;
      margin:5px 0;
    }
    .date {
      font-size: 11px;
      color: #1c1c1c;
    }
`
