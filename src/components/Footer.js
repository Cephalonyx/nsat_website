import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <a className ="email_footer" href="mailto:Robert@NSATransfer.com">Robert@NSATransfer.com</a>
        <p className="copyright">7227 Gateway Ct, Manassas, VA 20109</p>
        <a className="copyright" href="tel:703-850-0309">703-850-0309</a>

    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
