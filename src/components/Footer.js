import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <a className ="copyright" href="mailto:Robert@NSATransfer.com">Email: Robert@NSATransfer.com</a>  

        <p className="copyright">7227 Gateway Ct, Manassas, VA 20109</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
