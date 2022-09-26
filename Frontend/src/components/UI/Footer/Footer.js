import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer flex flex-column">
          <div className="footer flex flex-row">
            <div className="footer-text flex-standard__wrap flex-center-vertical">
              <div className="footer-text__logo">
                Logo
              </div>
              <div className="footer-text__text">
                <h2>Header</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="footer-links flex flex-column flex-center">
              <Link to="/About" className="clickable_hover_footer">
                  About 
              </Link>
              <Link to="/About" className="clickable_hover_footer">
                  Where To Buy 
              </Link>
              <Link to="/About" className="clickable_hover_footer">
                  Stuff 
              </Link>
            </div>
          </div>
            <div className="flex flex-space-around footer-partners">
              <p>
                Logo
              </p>
              <p>
                Logo
              </p>
              <p>
                Logo
              </p>
              <p>
                Logo
              </p>
            </div>
        </footer>
    )
  }
}
