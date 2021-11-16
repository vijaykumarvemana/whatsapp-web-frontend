import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Register extends Component {

    state={
        user:{
            username: '',
            email:'',
            password:''
        }
    }
handleInput = (key,value) =>{
    this.setState({
        user:{
            ...this.state.user,
            [key]: value
        }
    })
}

handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state.user)
        
        try {
            let response = await fetch("http://localhost:3001/whatsapp/register", {
                method: 'POST',
                body: JSON.stringify(this.state.user),
                headers: {
                    'Content-Type': 'application/json',
                
                }
            })
            if (response.ok) {
               
                alert('Registration Successfull')
                this.setState({
                    user: {
                        username: '',
                        email: '',
                        password: ''
                    },
                })
            } else {
                alert('SOMETHING WENT WRONG ON THE SERVER')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" 
                    placeholder="User name" 
                    value={this.state.user.username}
                    onChange={(e) => this.handleInput('username', e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.user.email}
                    onChange={(e) => this.handleInput('email', e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    value={this.state.user.password}
                    onChange={(e) => this.handleInput('password', e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to='/login'>Login?</Link>
                </p>
            </form>
        );
    }
}