import React, { Component } from 'react';
import Footers from './Footers.css';
class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer'>
          <footer className="footer-section">
            <div className="container">
              <div className="footer-cta">
                <div className="row">
                  <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="cta-text">
                        <h4>Find us</h4>
                        <span>1010 Avenue, sw 54321, chandigarh</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                      <i className="fas fa-phone"></i>
                      <div className="cta-text">
                        <h4>Call us</h4>
                        <span>9876543210 0</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                      <i className="far fa-envelope-open"></i>
                      <div className="cta-text">
                        <h4>Mail us</h4>
                        <span>mail@info.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-content">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 mb-50">
                    <div className="footer-widget">
                      <div className="footer-logo">
                        <h2 style={{color: 'white'}}>Event<span style={{color: 'rgb(255, 94, 20)'}}>ome</span></h2>
                      </div>
                      <div className="footer-text">
                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                                    elit,Lorem ipsum dolor sit amet.</p>
                      </div>

                    </div>
                  </div>
                  <div className="col-xl-4 ">
                    <div className="footer-widget">
                      <div className="footer-widget-heading">
                        <h3 onClick={() => console.log( Footers )}>Useful Links</h3>
                      </div>
                      <ul>
                        <li style={{color: 'white'}}>Home</li>
                        <li style={{color: 'white'}}>creat</li>
                        <li style={{color: 'white'}}>My event</li>
                        <li style={{color: 'white'}}>About us</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="footer-widget">
                      <div className="footer-widget-heading">
                        <h3>Subscribe</h3>
                      </div>
                      <div className="footer-text mb-25">
                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                      </div>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="text" placeholder="Email Address" />
                          <button><i className="fab fa-telegram-plane"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="container">
                <div className="row">
                  <div className="copyright-text">
                    <p>Copyright &copy; 2021, All Right Reserved</p>
                  </div>

                </div>
              </div>
            </div>
          </footer>
        </div>
      </>

    );
  }
}

export default Footer;
