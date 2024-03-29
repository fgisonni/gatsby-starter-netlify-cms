import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/sb-logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div>
        {/*Top-Teir Navigation*/}
        <nav
          className="navbar main-navbar is-transparent"
          role="navigation"
          aria-label="secondary-navigation"
        >
          <div className="navigation-padding">
            <div className="navbar-brand">
              <img src={logo} alt="Kaldi" style={{ width: '210px', height: 'auto' }} />
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </nav>
        {/*Sidebar Navigation*/}
        <nav
          className="side-navbar"
          role="navigation"
          aria-label="main-navigation"
        >
          <div
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <p className="navbar-item-title">Welcome</p>
            <Link className="navbar-item" to="/">
              How to Get Started
            </Link>
            <Link className="navbar-item" to="/medical-disclaimer">
              Medical Disclaimer
            </Link>
            <p className="navbar-item-title">Sugar Balance Program</p>
            <Link className="navbar-item" to="/quick-start-guides">
              Quick Start Guides
            </Link>
            <Link className="navbar-item" to="/weekly-meal-plans">
              12 Week Meal Plan
            </Link>
            <Link className="navbar-item" to="/recipes">
              Recipes
            </Link>
            <p className="navbar-item-title">Additional Bonuses</p>
            <Link className="navbar-item" to="meditations">
              Meditations
            </Link>
            <Link className="navbar-item" to="/fitness">
              Fitness
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
