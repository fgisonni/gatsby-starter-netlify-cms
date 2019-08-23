import React from 'react'

import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'

export default class RecipesPage extends React.Component {

  render(props) {
    return (
      <Layout>
        <section className="section recipes">
          <div className="container content page-padding">
            <BlogCard />
          </div>
        </section>
      </Layout>
    )
  }
}
