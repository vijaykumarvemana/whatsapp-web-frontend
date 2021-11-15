import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'

function App() {
  return (
    <>
      <Router>
        <div className="logo">
          <BsWhatsapp
            className="ml-5 mt-4"
            style={{ height: '50px', width: '50px' }}
          />
          <h6 className="ml-4 mt-4">WHATSAPP WEB</h6>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
