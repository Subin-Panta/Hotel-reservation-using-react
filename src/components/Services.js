import React from 'react'
import {FaCocktail, FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends React.Component{
    constructor(){
        super()
        this.state={
            services : [
                {
                    icon:<FaCocktail />,
                    title: "Cocktails",
                    info : "Enjoy Cocktails and Mocktails in this heat"
                },
                {
                    icon:<FaHiking />,
                    title: "Hiking",
                    info : "Check out our Hiking package for a little bit of adventure"
                },
                {
                    icon:<FaShuttleVan />,
                    title: "Rent a Car",
                    info : "Rent a Car and cruise around the city"
                },
                {
                    icon:<FaBeer />,
                    title: "Drinks",
                    info : "After happyhours(10pm) get 35% off on all drinks"
                }
            ]
        }
    }
    render() {
        return(
            <section className="services">
                  <Title title="Services" />
                  <div className="services-center">
                      {this.state.services.map((item,index) => {
                          return (
                          <article key={index} className="service">
                             <span>{item.icon}</span>
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                          </article>
                        )
                            
                              

                      })}
                  </div>
            </section>
        )
    }
}
