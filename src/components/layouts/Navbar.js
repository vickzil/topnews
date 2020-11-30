/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  	render() {
        return (
        //    Top Nav
        <div className="header-top d-md-block">
            <div className="container-fluid nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to='/' className="navbar-brand">
                        <span className="orange">
                            <img src={logo} />
                        </span>
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/sports" className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    Sports
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/entertainment" className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    Entertainment
                                </NavLink>
                            </li>        
                            <li className="nav-item">
                                <NavLink to="/science" className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    Science
                                </NavLink>
                            </li>        
                            <li className="nav-item">
                                <NavLink to="/business" className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    Business
                                </NavLink>
                            </li>        
                            <li className="nav-item">
                                <NavLink to="/health" className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    Health
                                </NavLink>
                            </li>        
                            <li className="nav-item">
                                <NavLink to="/general" className="nav-link" data-toggle="collapse" data-target="#navbarNav">
                                    General
                                </NavLink>
                            </li>        
                        </ul>
                    </div>
                </nav>          
            </div>
        </div>
        )

    }
}

export default Navbar
