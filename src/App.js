import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'
import Resetpassword from './components/Resetpassword'

function App() {
  return (
    <>
      <Router>
        <div className="logo">
          <BsWhatsapp
            className="mt-4"
            style={{ height: '36px', width: '36px', marginLeft: '11rem' }}
          />
          <h6 className="ml-4" style={{ marginTop: '34px' }}>
            WHATSAPP WEB
          </h6>
        </div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/resetpassword" exact component={Resetpassword} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
