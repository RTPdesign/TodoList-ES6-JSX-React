import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import User from './User.js';

export default class ToDo extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>

                <ul>
                    {this.props.tasks.map((task, key) => (<li key={key}>{task}</li>))}
                </ul>
            </div>
        );
    }
}