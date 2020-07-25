import React, { Component, createContext } from 'react'
import items from "./data"
export const RoomContext = createContext()
export default class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading: true,
        type: 'all',
        capacity:0,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }
    
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms= rooms.filter(rooms => rooms.featured === true)
        let maxPrice= Math.max(...rooms.map(item => item.price))
        let maxSize= Math.max(...rooms.map(item => item.size))
        let minPrice= Math.min(...rooms.map(item => item.price))
        let minSize= Math.min(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize,
            minPrice,
            minSize
            
        })
    }
    formatData(items){
        let tempItems=items.map(item =>{
            let id= item.sys.id
            let images=item.fields.images.map(image => image.fields.file.url)
            let room={...item.fields,images,id}
            return room;
        }
        )
        return tempItems
    }
    getRoom = (slug) => {
        let tempRooms=[...this.state.rooms]
        const room= tempRooms.find(room => room.slug === slug)
        return room
    }
    handleChange = event => {
        const target = event.target
        const value= target.type === 'checkbox' ?target.checked : target.value
        const name= event.target.name
        this.setState({
            [name] : value
        },this.filterRooms)
    }
    filterRooms =() =>{
        let {
            rooms,type,capacity,price,minSize,maxSize,breakfast,pets
        }= this.state
        capacity = parseInt(capacity)
        price =parseInt(price)
        let tempRooms=[...rooms]
        if(type !=='all'){
            tempRooms=tempRooms.filter(room => room.type === type)
        }
        if(capacity !==0){
            tempRooms=tempRooms.filter(room => room.capacity === capacity)
        }
        tempRooms=tempRooms.filter(room=>room.price <=price)
        tempRooms=tempRooms.filter(room => room.size>=minSize && room.size<=maxSize)
        if(breakfast)
        {
            tempRooms=tempRooms.filter(room => room.breakfast === true)
        }
        if(pets)
        {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        this.setState({
            sortedRooms:tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,getRoom:this.getRoom,handleChange:this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
            )
        }
    }
    
//     import React,{useState , useEffect} from 'react'
    
//     export default function Context() {
//         const [rooms,setRooms]=useState([])
//         const [sortedRooms,setSortedrooms]=useState([])
//         const [featuredRooms,setFearturedrooms]=useState('')
//         const [loading,setLoading]=useState(true)
//         const [type,setType]=useState('all')
//         const [capacity,setCapacity]=useState(0)
//         const [price,setPrice]=useState(0)
//         const [minPrice,setMinprice]=useState(0)
//         const [maxPrice,setMaxprice]=useState(0)
//         const [minSize,setMinsize]=useState(0)
//         const [maxSize,setMaxSize]=useState(0)
//         const [breakfast,setBreakfast]=useState(false)
//         const [pets,setPets]=useState(false)

//         useEffect(()=>{
//             let rooms = this.formatData(items)
//             let featuredRooms= rooms.filter(rooms => rooms.featured === true)
//             let maxPrice= Math.max(...rooms.map(item => item.price))
//             let maxSize= Math.max(...rooms.map(item => item.size))
//             let minPrice= Math.min(...rooms.map(item => item.price))
//             let minSize= Math.min(...rooms.map(item => item.size))
            
//             setRooms(rooms)
//             setFeaturedRooms(featuredRooms)
//             setSortedrooms(rooms)
//             setLoading(false)
//             setPrice(maxPrice)
//             setMaxprice(maxPrice)
//             setMaxsize(maxSize)
//             setMinprice(minPrice),
//             setMinsize(minSize)
                
//             })  
//         }
//         formatData(items){
//             let tempItems=items.map(item =>{
//                 let id= item.sys.id
//                 let images=item.fields.images.map(image => image.fields.file.url)
//                 let room={...item.fields,images,id}
//                 return room;
//             }
//             )
//             return tempItems
//         }
//         getRoom = (slug) => {
//             let tempRooms=[...rooms]
//             const room= tempRooms.find(room => room.slug === slug)
//             return room
//         }
//         handleChange = event => {
//             const target = event.target
//             const value= target.type === 'checkbox' ?target.checked : target.value
//             const name= event.target.name
//             this.setState({
//                 [name] : value
//             },this.filterRooms)
//         }
//         filterRooms =() =>{
//             let {
//                 rooms,type,capacity,price,minSize,maxSize,breakfast,pets
//             }= this.state
//             capacity = parseInt(capacity)
//             price =parseInt(price)
//             let tempRooms=[...rooms]
//             if(type !=='all'){
//                 tempRooms=tempRooms.filter(room => room.type === type)
//             }
//             if(capacity !==0){
//                 tempRooms=tempRooms.filter(room => room.capacity === capacity)
//             }
//             tempRooms=tempRooms.filter(room=>room.price <=price)
//             tempRooms=tempRooms.filter(room => room.size>=minSize && room.size<=maxSize)
//             if(breakfast)
//             {
//                 tempRooms=tempRooms.filter(room => room.breakfast === true)
//             }
//             if(pets)
//             {
//                 tempRooms = tempRooms.filter(room => room.pets === true);
//             }
    
//             this.setState({
//                 sortedRooms:tempRooms
//             })
//         }
//         return (
//             <div>
                
//             </div>
//         )
//     }
    
// // export default { RoomProvider, RoomContext}