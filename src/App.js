import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import Resetpassword from './components/Resetpassword';
import { Row, Col } from 'react-bootstrap';

import SideBar from './components/SideBar';
import ChatRoom from './components/ChatRoom';

function App() {
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
		{ /* <Route path='/' exact component={Login} />
				<Route path='/register' exact component={Register} />
				<Route path='/resetpassword' exact component={Resetpassword} /> */}
				<Route path='/chatroom' exact component={ChatRoom} />
			</Router>
		</>
	);
}

export default App;
