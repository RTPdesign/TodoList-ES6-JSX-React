import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import User from './User';
import ToDo from './ToDo';

class App extends React.Component {
    constructor(){
        super();
    }
    render(){

        return (
            <div>
                <User />
                <ToDo />
            </div>
        );
    }
}