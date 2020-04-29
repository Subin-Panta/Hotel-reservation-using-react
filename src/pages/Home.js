import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
const Home= () => {
    return(
        <React.Fragment>
        <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting @9000Rs/Day" ><Link to="/rooms/" className="btn-primary">Rooms</Link></Banner>
        </Hero>
        <Services />
        <FeaturedRooms /> 
        
        </React.Fragment>
    )
}
export default Home

