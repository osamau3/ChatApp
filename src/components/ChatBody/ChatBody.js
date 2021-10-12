import React, { useState, useEffect } from "react"

import Message from "../Message/Message"
import { ChatBodySC } from "../styled";

export default function ChatBody(props) {
    const [conversation, setConversation] = useState([
        {
            date: Date.now(),
            message: 'Hello Elixirator, how it is doing.',
            from: 'Osama Yousry',
            isIncomming: false,
            id: 1,
        },
        {
            date: Date.now(),
            message: 'You still in paris ?',
            from: 'Osama Yousry',
            isIncomming: false,
            id: 2,
        },
        {
            date: Date.now(),
            message: 'Hello Osama.',
            from: 'Elixirator',
            isIncomming: true,
            id: 3,
        },
        {
            date: Date.now(),
            message: 'Yes still here',
            from: 'Elixirator',
            isIncomming: true,
            id: 4,
        },
        {
            date: Date.now(),
            message: 'BTW, you are doing a great job.',
            from: 'Elixirator',
            isIncomming: true,
            id: 5,
        },
    ])

    useEffect(() => {
        if(props.newMessage) {
            const newConversation = [...conversation]
            newConversation.push({
                ...props.newMessage,
                id: (newConversation.length + 1)
            })
            setConversation(newConversation)
        }
    }, [props.newMessage])

    const avatar = "https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg"

    const senderConversation = conversation.filter(({ isIncomming }) => isIncomming)

    const lastMessageFromSenderId = senderConversation[senderConversation.length - 1].id


    return (
        <ChatBodySC id="conversation">
            {
                conversation.map(({message, date, isIncomming, from, id}, index) => {
                    return (
                        <div key={id} aria-label="messageItem">
                            <Message
                                key={id}
                                data-testid="messageItem"
                                isIncomming={isIncomming}
                                messageDate={date}
                                messageContent={message}
                                from={from}
                                avatar={avatar}
                                isLast={lastMessageFromSenderId === id}
                            />
                        </div>
                        )
                })
            }
        </ChatBodySC>
    )
}

