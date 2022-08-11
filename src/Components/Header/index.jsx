import React from "react";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

// Headers.PropTypes = {
// }

function Headers(){
    return (
        <>
            <header className="main-header">
                <Link to="index.html" className="logo">
                    <b className="logo-mini">
                        <span className="light-logo"><img src="../images/logo-light.png" alt="logo"/></span>
                        <span className="dark-logo"><img src="../images/logo-dark.png" alt="logo"/></span>
                    </b>
                    <span className="logo-lg">
                        <img src="../images/logo-light-text.png" alt="logo" className="light-logo"/>
                        <img src="../images/logo-dark-text.png" alt="logo" className="dark-logo"/>
                    </span>
                </Link>
                <Nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="search-box">
                                <a className="nav-link hidden-sm-down" href="javascript:void(0)"><i className="mdi mdi-magnify"></i></a>
                                <form className="app-search" style="display: none;">
                                    <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a className="srh-btn"><i className="ti-close"></i></a>
                                </form>
                            </li>			
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="mdi mdi-email"></i>
                                </a>
                                <ul className="dropdown-menu scale-up">
                                    <li className="header bg-primary text-white">You have 5 messages</li>
                                    <li>
                                        <ul className="menu inner-content-div">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="../images/user2-160x160.jpg" className="rounded-circle" alt="User Image"/>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h4>
                                                            Lorem Ipsum
                                                            <small><i className="fa fa-clock-o"></i> 15 mins</small>
                                                        </h4>
                                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="../images/user3-128x128.jpg" className="rounded-circle" alt="User Image"/>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h4>
                                                            Nullam tempor
                                                            <small><i className="fa fa-clock-o"></i> 4 hours</small>
                                                        </h4>
                                                        <span>Curabitur facilisis erat quis metus congue viverra.</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="../images/user4-128x128.jpg" className="rounded-circle" alt="User Image"/>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h4>
                                                            Proin venenatis
                                                            <small><i className="fa fa-clock-o"></i> Today</small>
                                                        </h4>
                                                        <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="../images/user3-128x128.jpg" className="rounded-circle" alt="User Image"/>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h4>
                                                            Praesent suscipit
                                                            <small><i className="fa fa-clock-o"></i> Yesterday</small>
                                                        </h4>
                                                        <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="../images/user4-128x128.jpg" className="rounded-circle" alt="User Image"/>
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h4>
                                                            Donec tempor
                                                            <small><i className="fa fa-clock-o"></i> 2 days</small>
                                                        </h4>
                                                        <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#" className="bg-primary text-white">See all e-Mails</a></li>
                                </ul>
                            </li>
                            <li className="dropdown notifications-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="mdi mdi-bell"></i>
                                </a>
                                <ul className="dropdown-menu scale-up">
                                    <li className="header bg-primary text-white">You have 7 notifications</li>
                                    <li>
                                        <ul className="menu inner-content-div">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-aqua"></i> Curabitur id eros quis nunc suscipit blandit.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-warning text-yellow"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-users text-red"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart text-green"></i> In gravida mauris et nisi
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-red"></i> Praesent eu lacus in libero dictum fermentum.
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-red"></i> Nunc fringilla lorem 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user text-red"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><a href="#" className="bg-primary text-white">View all</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="control-sidebar"><i className="fa fa-cog fa-spin"></i></a>
                            </li>
                        </ul>
                    </div>
                </Nav>
            </header>
        </>
    )
}

export default Headers;