import React from 'react'

import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'

export default class FitnessPage extends React.Component {

  render(props) {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content page-padding">
              <BlogCard />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
