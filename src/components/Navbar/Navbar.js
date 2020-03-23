import React, {Component} from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { logoutUser } from "../../store/actions/auth";


class Navbar extends Component {

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    }

    toggleMenu = () => {
        this.refs.mobileNav.sidenav();
    }
      
    render () {
    const {isAuth} = this.props;
    return (

        <nav className= "nav-wrapper deep-purple darken-1 nav__bar">
            <div className="container">
            <Link to="/" className="brand-logo">My Test</Link>
            
                <ul className= "right hide-on-med-and-down">
                    <li className = "link__item">
                        <Link to="/">To the main</Link>
                    </li>
            
                    <li className = "link__item">
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className = "link__item">
                        <Link to="/news">News</Link>
                    </li>
                    {isAuth && <button className ="btn waves-effect waves-light pink lighten-1 z-depth-0" onClick = {this.handleLogout}>Logout</button>}

                </ul>
            </div>
        </nav>
    )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError,
      isAuth: state.auth.isAuthenticated
    };
  }

export default connect(mapStateToProps)(Navbar);
