import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ToDo from './Todo.js';

export default class User extends Component {
    constructor(){
        super();
        this.state = {}; 
        this.state.users = [{
            userId: 0,
            name: 'Ryan',
            todoList: ['run', 'read', 'ride']
        },{
            userId: 1,
            name: 'Todd',
            todoList: ['eat', 'drink', 'sleep']
        },{
            userId: 2,
            name: 'Parks',
            todoList: ['hike', 'bike', 'jog']
        }];
        this.state.selectedUser = this.state.users[0];
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            selectedUser: this.state.users[event.target.getAttribute('data-key')]
        });
    }

    render(){
        let buttonList = [];
        for (let i = 0; i < this.state.users.length; i++) {
            buttonList.push(<button type="button" key={i} data-key={i} onClick={this.handleChange}>{this.state.users[i].name}</button>);
        };
        return(
            <div>
                {buttonList}
                <h2>{this.state.selectedUser.name}'s To-Do List:</h2> 
                <ToDo tasks={this.state.selectedUser.todoList}/>
            </div>
        );
    }
}

ReactDOM.render(<User />, document.getElementById('app'));