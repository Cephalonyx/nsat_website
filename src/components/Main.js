import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/picture01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Specializing in the transport and storage of fine art and antiques for over 30 years.
          </p>
          <p>
          Weekly Shuttle between Washington DC and New York City. Servicing all of the eastern seaboard.
         </p>
          <p>
          Servicing art dealers, collectors, auction houses, museums, designers, and private clients with an experienced, professional, and polite crew.
          </p>
           
          {close}
        </article>


       
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Request a quote</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
           <a href="mailto:Robert@NSATransfer.com?subject=Website Quote Request&body=1) Collection Address and contact information: %0d%0a
2) Destination Address and contact information: %0d%0a
3) Description of articles including dimensions and pictures is possible:">To request a quote, please click this link </a>  
  or send an email to Robert@NSATransfer.com with the following information,
<ul><li>Collection Address and contact information</li>
<li>Destination Address and contact information</li>
<li>Description of articles including dimensions and pictures if possible.</li></ul>
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
