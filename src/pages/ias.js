import React from 'react'
import Layout from '../components/Layout'
import '../components/SocietiesPage.css'

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <section className="hero society">
          <div className="container">
            <div className="columns is-vcentered">
            
            <div className="column is-4">
                <figure >
                  <img src="img/ias-logo.png" alt="ias-logo" />
                </figure>
              </div>
              <div className="column is-7 ">
                <h1 className="title is-1 is-light is-semibold is-spaced">Industry Applications Society</h1>
                <h2 className="subtitle is-5 is-light is-thin">
                  The Industry Applications Society, as a transnational organization, is interested in advancement of the theory and practice of electrical and electronic engineering in the development, design, manufacture and application of electrical systems, apparatus, devices and controls to the processes and equipment of industry and commerce; promotion of safe, reliable and economic installations; industry leadership in energy conservation and environmental, health, and safety issues; creation of voluntary engineering standards and recommended practices; and the professional development of its membership.
                                </h2>
                {/* <!-- CTA --> */}
                {/* <p>
                  <Link className="story__button is-fat is-bold" to="/membership">
                    Join IEEE
                                    </Link>
                </p> */}

              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-inner">
              <div className="features-wrap">
                <div className="feature">
                  <div className="feature-inner">
                    <div className="feature-header">
                      <div className="feature-icon">
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                          <g fill-rule="nonzero" fill="none">
                            <path d="M7 8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM19 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF"></path>
                            <path d="M19 20h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#43F1FF"></path>
                            <path d="M31 8h-6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF"></path>
                            <path d="M7 20H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#43F1FF"></path>
                            <path d="M7 32H1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z" fill="#4353FF"></path>
                            <path d="M29.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill="#43F1FF"></path>
                            <path d="M17.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zM29.5 30h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z" fill="#4353FF"></path>
                          </g>
                        </svg>
                      </div>
                      <h4 className="subtitle is-5 is-light is-thin">Vision</h4>
                    </div>
                    <p className="text-sm mb-0">IAS will be a world leader in the advancement of technology and dissemination of technical information to support professionals engaged in the applications of electrical and electronic engineering to industry.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-inner">
                    <div className="feature-header">
                      <div className="feature-icon">
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                          <g fill-rule="nonzero" fill="none">
                            <path d="M4 12H0V5a5.006 5.006 0 0 1 5-5h7v4H5a1 1 0 0 0-1 1v7z" fill="#43F1FF"></path>
                            <path d="M32 12h-4V5a1 1 0 0 0-1-1h-7V0h7a5.006 5.006 0 0 1 5 5v7zM12 32H5a5.006 5.006 0 0 1-5-5v-7h4v7a1 1 0 0 0 1 1h7v4z" fill="#4353FF"></path>
                            <path d="M27 32h-7v-4h7a1 1 0 0 0 1-1v-7h4v7a5.006 5.006 0 0 1-5 5z" fill="#43F1FF"></path>
                          </g>
                        </svg>
                      </div>
                      <h4 className="subtitle is-5 is-light is-thin">Mission</h4>
                    </div>
                    <p className="text-sm mb-0">IAS pursues the advancement of the theory and practice of electrical and electronic engineering in the development, design, manufacture and application of electrical systems, apparatus, devices and controls to the processes and equipment of industry and commerce; the promotion of safe, reliable and economical installations; industry leadership in energy conservation and environmental health and safety issues; the creation of voluntary engineering standards and recommended practices; and the professional development of its membership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
