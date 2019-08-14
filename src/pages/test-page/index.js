import React from 'react'

import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'

export default class BlogIndexTestPage extends React.Component {

  render(props) {
    const data = this.props
    // const { markdownRemark: post } = data
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
