import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">IAS</h1>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
