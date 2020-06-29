import React, {Component} from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Image from 'react-bootstrap/Image';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './Navigation.module.css';
import MenuBar from './MenuBar/MenuBar';
import Aux from '../../hoc/Aux';
import logo from '../../assets/images/home/logo.jpg';

class Navigation extends Component {
    state = {
        menuBarIsShown: false,
    }

    menuBarToggleHandler = () => {
        this.setState(prevState => ({
            menuBarIsShown: !prevState.menuBarIsShown,
        }))
    }

    render() {
        return (
            // <Navbar fixed="top" expand="lg" bg="light" variant="light">
            //     <Navbar.Brand href="#"><Image fluid src="../../../assets/images/home/logo.jpg"></Image></Navbar.Brand>
            //     <i className="fas fa-search"></i>
            //     <Navbar.Toggle aria-controls="mobile-nav" />
            //     <Navbar.Collapse id="mobile-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Link>Home</Nav.Link>
            //             <NavDropdown title="Products" id="mobile-nav-products">
            //                 <NavDropdown.Item>Ladies</NavDropdown.Item>
            //                 <NavDropdown.Item>Gentlemen</NavDropdown.Item>
            //                 <NavDropdown.Item>Unisex</NavDropdown.Item>
            //             </NavDropdown>
            //             <Nav.Link>Blog</Nav.Link>
            //             <Nav.Link>Contact</Nav.Link>
            //         </Nav>
            //     </Navbar.Collapse>

            // </Navbar>

            <Aux>
                <div className={classes.Navigation}>
                    <ul>
                        <li onClick={this.menuBarToggleHandler}>
                            Menu
                        </li>
                        <li>
                            <img src={logo} alt="Logo" />
                        </li>
                        <li style={{marginLeft: 'auto', fontSize: 30}}>
                            <i className="fas fa-search"></i>
                        </li>
                    </ul>
                </div>
                <MenuBar menuBarIsShown={this.state.menuBarIsShown} toggleMenuBar={this.menuBarToggleHandler}/>
            </Aux>
        )
    }
}

export default Navigation;