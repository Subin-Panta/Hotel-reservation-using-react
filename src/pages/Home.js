import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
const Home= () => {
    return(
        <Hero >
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting @ 1500Rs per month" ><Link to="/rooms/" className="btn-primary">Rooms</Link></Banner>
            Hello home page
        </Hero>
    )
}
export default Home

