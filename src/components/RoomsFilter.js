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
        let people=getUnique(rooms, 'capacity')
        people= ['0',...people]

        
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
                    <label htmlFor="capacity">Guest</label>
                    <select className="form-control" name="capacity" id="capacity" value={capacity} onChange={handleChange}>
                    {people.map((item,index)=> {
                        return <option value={item} key={index}>{item} </option>
                    })}
                    </select>
                    <div className="form-group">
                <label htmlFor="price">Price ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />

                    </div>
                </div>
            </form>
        </section>
    )
}
