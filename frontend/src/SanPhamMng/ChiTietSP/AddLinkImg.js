import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";

class addChild extends Component {
    addChild() {
        // State change will cause component re-render
        this.setState(this.state.lst.concat([
            {id: 2, name: "Another Name"}
        ]))
    }

    constructor(props) {
        super(props);
        this.state = {lst:[]};
    }
    async componentDidMount() {
        this.state.lst = [{id: 2, name: "Another Name"},{id: 2, name: "Another Name"}];
    }
    render() {
        const {lst} = this.state;
        const lstnew = lst.map(lst => {
            return <h1 key={lst.id} value={lst.id}>
                {lst.id}-{lst.name}
            </h1>
        });
        return
        <h1>2</h1>
        {lstnew}
    }
}

export default addChild;