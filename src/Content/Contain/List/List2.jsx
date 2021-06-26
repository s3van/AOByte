import React, { Component } from 'react'
import ListStyles from "./List1.module.css"

export class List2 extends Component {
    render() {
        return (
            <div className={ListStyles.wrapper}>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}

export default List2
