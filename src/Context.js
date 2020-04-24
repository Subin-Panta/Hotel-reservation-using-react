import React, { Component, createContext } from 'react'
export const RoomContext = createContext()
export default class RoomProvider extends Component {
    state={}
    render() {
        return (
            <RoomContext.Provider value="Hello">
                {this.props.children}
            </RoomContext.Provider>
            )
        }
    }
// export default { RoomProvider, RoomContext}