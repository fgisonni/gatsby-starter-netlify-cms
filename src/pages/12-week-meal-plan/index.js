import React from 'react'

import Layout from '../../components/Layout'
import WeekCard from '../../components/WeekCard'

export default class BlogIndexPage extends React.Component {

  render() {

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content page-padding">
              <WeekCard />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
