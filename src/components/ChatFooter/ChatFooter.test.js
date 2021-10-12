import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatFooter from "./ChatFooter";


test('if send btn disabled after sending message', async () => {
    const chatFooterComponent = render(<ChatFooter onSendMessge={() => {}}/>)
    const messageInput = chatFooterComponent.getByLabelText('messageInput')
    const sendMessageBtn = chatFooterComponent.getByLabelText('sendMessageBtn')

    fireEvent.change(messageInput, {target: {value: ''}})
    expect(sendMessageBtn).toBeDisabled()
})
