import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'
import Resetpassword from './components/Resetpassword'
import { Row, Col } from 'react-bootstrap'
import SideBar from './components/SideBar'
import ChatRoom from './components/ChatRoom'
import {useState, useEffect} from 'react'

function App() {

  const [userAvailable, setUserAvailable] = useState(false)
  const [token, setToken] =  useState(null)

 const getUser = async () => {

let token = setToken(localStorage.getItem("token"))
console.log(token)

  try{
    let response = await fetch("http://localhost:3001/whatsapp", {
      method: 'GET',
      body: JSON.stringify(this.state.loggedinUser),
      headers: {
          'Content-Type': 'application/json',
          
          Authorization: `Bearer ${token}`,

      }
    })
    if(response.ok){
      let data = await response.json()
      console.log(data)

    }
    }catch(err){
    console.log(err)
  } 
}

useEffect(() => {
  getUser()
}, [token])
 
  return (


    <>
      <Router>
        {/* <div className="auth-wrapper">
          <div className="auth-inner">
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/resetpassword" exact component={Resetpassword} />
          </div>
        </div> */}


        {!localStorage.getItem('token') ? (
         
          <Route path="/login"  component={Login} />
          
        
        ) : (
        
        <Route path="/" exact component={ChatRoom} />
        )
       }
         </Router>
    </>
  )
}

export default App
