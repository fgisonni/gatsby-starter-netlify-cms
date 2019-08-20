/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class WeekCard extends React.Component {

  render(props) {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }, i) => (
            <Link key={post.id} className="is-parent week-block column is-full" to={post.fields.slug}>
              <div>
                <article className="blog-list-item box week-block-inner">
                  <div className="columns week-block-content">
                    <div className="column is-one-quarter is-3 week">
                      <p>Week<br /> {i+1}</p>
                    </div>
                    <div className="column is-three-quarters week-copy">
                      <p>
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </Link>
          ))}
      </div>
    )
  }
}

WeekCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WeekCardQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "weekly-meal-plans" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 150)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                path
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={
      (data, count) => <WeekCard data={data} count={count} />
    }
  />
)
