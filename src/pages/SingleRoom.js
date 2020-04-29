import React, { Component } from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import {RoomContext} from "../Context"
import StyledHero from "../components/StyledHero"
export default class SingleRoom extends Component{
    constructor(props){
        super(props)
        this.state ={
            slug: this.props.match.params.slug,
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
        const {name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        }= room
        const [mainImg,...defaultImg]=images
        
        return(
            <React.Fragment>
                <StyledHero img={mainImg}>
                    <Banner title={name + ' room'}>
                        <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                     {defaultImg.map((item,index) => {
                         return <img src={item} key={index} alt={name} />
                     })}   
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>price: Rs{price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>Max capacity: {capacity>1? capacity+" People" : capacity+" Person"}</h6>
                            <h6>{pets? "Pets are allowed" : "No Pets Allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item,index) => {
                            return <li key={index}> - {item}</li>
                        }
                        )}
                    </ul>     
                </section>
            </React.Fragment>
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
