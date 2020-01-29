import React from 'react'
const RoomContext=React.createContext();
Class RoomProvider extends React.Component {
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <RoomContext.Provider vlaue='hello'>
                {this.props.children}                
            </RoomContext.Provider>

        )
    }
}
const RoomConsumer= RoomContext.Consumer

export {RoomProvier,RoomConsumer,RoomContext}