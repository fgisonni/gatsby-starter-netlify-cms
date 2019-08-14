import React from 'react'

import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'

class BlogIndexPage extends React.Component {

  render() {

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

export default BlogIndexPage
