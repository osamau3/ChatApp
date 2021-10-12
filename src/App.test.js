import React from 'react'
import {render, fireEvent, getAllByTestId, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatFooter from "./components/ChatFooter/ChatFooter";
import ChatBody from "./components/ChatBody/ChatBody";



test('If a new message added to the conversation.',  async () => {
    const newMessage = {
        date: Date.now(),
        message: "Hello!",
        from: 'Osama Yousry',
        isIncomming: false,
    }

    const chatFooterComponent = render(<ChatFooter onSendMessge={() => {}} />)
    const chatBodyComponent = render(<ChatBody newMessage={newMessage}/>)

    const sendMessageBtn = chatFooterComponent.getByLabelText('sendMessageBtn')
    const messageInput = chatFooterComponent.getByLabelText('messageInput')


    fireEvent.change(messageInput, {target: {value: newMessage.message}})
    fireEvent.click(sendMessageBtn)

    let conversationList =  chatBodyComponent.getAllByLabelText("messageItem").map(({ textContent }) => textContent)

    expect(conversationList).toHaveLength(6)
})
