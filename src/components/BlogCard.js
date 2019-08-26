/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogCard extends React.Component {

  render(props) {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            typeof window !== 'undefined' && window.location.pathname === '/'+post.frontmatter.path || typeof window !== 'undefined' && window.location.pathname === '/'+post.frontmatter.path+'/' ?
            <Link key={post.id} className={`is-parent column blog-link-card`} to={post.fields.slug}>
                <article
                  className={`blog-list-item tile is-child box blog-link-card-article ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${
                              post.title
                            }`,
                          }}
                        />
                    ) : null}
                  </header>
                  <div className="card-content">
                    <p className="post-meta title has-text-primary is-size-4">
                      {post.frontmatter.title}
                    </p>
                    <p>
                      {post.frontmatter.description}
                    </p>
                  </div>
                </article>
            </Link>
            : null
          ))}
      </div>
    )
  }
}

BlogCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogCardQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
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
                description
                featuredimage {
                  publicURL
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
      (data, count) => <BlogCard data={data} count={count} />
    }
  />
)
