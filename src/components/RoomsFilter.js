import React, { useContext } from 'react'
import {RoomContext} from '../Context'
import Title from "../components/Title"
const getUnique = (item,value) => {
    return [...new Set(item.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets}= useContext ( RoomContext )
        let types=getUnique(rooms, 'type')
        types =['all',...types]
       
        
    return (
        
        <section className="filter-container">
            <Title title="search Rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className="form-control" name="type" id="type" value={type} onChange={handleChange}>
                    {types.map((item,index)=> {
                        return <option value={item} key={index}>{item} </option>
                    })}
                    </select>
                </div>
            </form>
        </section>
    )
}
