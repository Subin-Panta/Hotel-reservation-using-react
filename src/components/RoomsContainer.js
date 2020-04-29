import React ,{ useContext } from 'react'
import RoomsFilter from "./RoomsFilter.js"
import RoomsList from "./RoomsList.js"
import {RoomContext} from '../Context'
import Loading from './loading'

export default function RoomsContainer() {
    const {loading,sortedRooms,rooms} = useContext(RoomContext)
    if (loading)
    {
        return<Loading />
    }
    return (
        <div>
           
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}
