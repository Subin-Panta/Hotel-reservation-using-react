import React,{ useContext } from 'react'
import { RoomContext } from "../Context";
import Loading from "./loading"
import Room from "./Room"
import Title from "./Title"
export default function FeaturedRooms() {
     let {loading , featuredRooms: rooms}= useContext(RoomContext)
     rooms= rooms.map(room => {
         return <Room key={room.id} room={room}/>
     })
    return (
        <section className="featured-rooms">
           <Title title="Featured Rooms"/>
           <div className="featured-rooms-center">
               {loading?<Loading /> : rooms}
           </div>
        
            
            
        </section>
    )
}
