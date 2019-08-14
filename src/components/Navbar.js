import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

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
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
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
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/test-page">
              Test Page
            </Link>
            <Link className="navbar-item" to="/test-page-2">
              Test Page 2
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
