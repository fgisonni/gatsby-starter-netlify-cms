import React from 'react'

import Layout from '../../components/Layout'
import ImageBlogCard from '../../components/ImageBlogCard'

export default class BlogIndexPage extends React.Component {

  render() {

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content page-padding">
              <ImageBlogCard />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
