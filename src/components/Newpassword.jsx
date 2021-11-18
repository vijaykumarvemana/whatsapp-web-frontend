import React, { Component } from "react";

export default class Newpassword extends Component {
    state={
        newpassword:{
            password:''
        }
    }

    handleInput = (key,value) =>{
    this.setState({
        newpassword:{
            ...this.state.newpassword,
            [key]: value
        }
    })
}
handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            let response = await fetch("http://localhost:3003/whatsapp/passwordreset/:resetToken", {
                method: 'PUT',
                body: JSON.stringify(this.state.newpassword),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (response.ok) {
               
                alert('Reset successful')
                this.setState({
                    newpassword: {
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
           <div className=''>
            <form onSubmit={this.handleSubmit}>
                <h3>Set NewPassword</h3>

                <div className="form-group">
                    <label>Enter your new password</label>
                    <input type="password" className="form-control" placeholder="Enter new password" 
                    value={this.state.newpassword.password}
                    onChange={(e) =>this.handleInput('password',e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
        );
    }
}