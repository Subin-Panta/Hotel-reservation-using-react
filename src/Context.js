import React, { Component, createContext } from 'react'
export const RoomContext = createContext()
export default class RoomProvider extends Component {
    state={
        greeting: "hello",
        no: 12
    }
    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </RoomContext.Provider>
            )
        }
    }
// export default { RoomProvider, RoomContext}