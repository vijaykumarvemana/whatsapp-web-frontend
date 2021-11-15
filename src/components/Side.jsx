import {Container, Row, Col} from 'react-bootstrap';

const Side = () => {
    return (
    
        <Row>
          <Col sm={4}>
 <div className="sidebar">
    <div className="sidebar-inner">
        <div className="sidebar-content">
            <div className="sidebar-header">
                <h4>
                    <i className="fa fa-fw fa-bars"></i>
                    <span>Sidebar</span>
                </h4>
            </div>
            <div className="sidebar-menu">
                <ul className="nav nav-sidebar">
                    <li className="nav-item">

                        <a href="index.html" className="nav-link active">

                            <i className="fa fa-fw fa-home"></i>
                            <span>Dashboard</span>

                        </a>

                    </li>
                    </ul>
            </div>
        </div>
    </div>
</div>

        

          </Col>
          <Col sm={8}>
              
          </Col>
        </Row>
    
      
    );
    }       

export default Side;