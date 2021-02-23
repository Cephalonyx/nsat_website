import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/nsat_icon.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <div className="icon fa-diamond"></div>
      {/* <img src={pic01}></img> */}
      
    </div>
    <div className="content">
      <div className="inner">
        <h1>NORTH SOUTH ART TRANSFER</h1>
        <h2>
        ​Fine Art & Antique Transport{' '}
        </h2>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
