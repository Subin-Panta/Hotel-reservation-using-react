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
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select className="form-control" name="capacity" id="capacity" value={capacity} onChange={handleChange}>
                    {people.map((item,index)=> {
                        return <option value={item} key={index}>{item} </option>
                    })}
                    </select>
                </div>
                    <div className="form-group">
                    <label htmlFor="price">Price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">Room size</label>
                        <div className="size-inputs">
                            <input 
                            type="number" 
                            name="minSize" 
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                            />
                            <input 
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                            />                        
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox"
                            name="breakfast"
                            checked={breakfast}
                            id="breakfast"
                            onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox"
                            name="pets"
                            checked={pets}
                            id="pets"
                            onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
            </form>
        </section>
    )
}
