import React, { Component } from 'react'
import defaultBcg from '../images/room-2.jpeg'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import {RoomContext} from "../Context"
export default class SingleRoom extends Component{
    constructor(props){
        super(props)
        this.state ={
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType= RoomContext;
    render(){
        const { getRoom } = this.context
        const room= getRoom(this.state.slug)
        if(!room){
            return(
                <div className="error">
                   <h3>no such room found</h3>   
                   <Link to="/rooms" className="btn-primary">Back to rooms</Link>  
                </div>
    
            )           
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}= room
        return(
        <Hero hero="roomsHero">
            <Banner title={name + ' room'}>
                <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
            </Banner>
                  
        </Hero>
    )   
    }
}



// export default function SingleRoom(props) {
//     const [slug , setSlug]  = useState(props.match.params.slug)
//     // const[defaultBcg, setdefaultbcg] = useState(defaultBcg)
//     const { getRoom } = useContext(RoomContext)
//     const room= getRoom(slug)
    
//     console.log(room)
//     return (
//         <div>
//             hello 
//         </div>
//     )
// }
