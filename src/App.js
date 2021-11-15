
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {Row, Col} from 'react-bootstrap';

import SideBar from "./components/SideBar";
import ChatRoom from './components/ChatRoom';


function App() {
  return (
    <Row className="no-gutters app">
      <Router>
     <Col sm={4} >
       <SideBar />
       </Col>
       <Col sm={8}  >
        <Route exact path="/" component={ChatRoom} />
         </Col>
         </Router>
    </Row>
      
  
  );
}

export default App;
