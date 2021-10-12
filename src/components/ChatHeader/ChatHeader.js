import React from "react";

import Avatar from "../Avatar/Avatar";
import { ChatHeaderSC } from "../styled";

export default function ChatHeader() {
    return (
        <ChatHeaderSC>
            <Avatar
                imageURL="https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg"
                userName="Elixirator" />
        </ChatHeaderSC>
    )
}

