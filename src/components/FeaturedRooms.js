import React,{ useContext } from 'react'
import { RoomContext } from "../Context";

export default function FeaturedRooms() {
    const {greeting, no}= useContext(RoomContext)
    return (
        <div>
            sdasda {greeting} {no}
        </div>
    )
}
