/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ImageBlogCard extends React.Component {

  render(props) {

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-multiline is-mobile">
        {posts &&
          posts.map(({ node: post }) => (

            {/*<div key={post.id} className={`is-parent column is-4`}>
              <div>
                <article
                  className={`blog-list-item tile is-child box ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
                >
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${
                              post.title
                            }`,
                          }}
                        />
                      </div>
                    ) : null}
                  </header>
                  <div className="">
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                </article>
              </div>
            </div>

            style={`{ background-image: 'url(${post.frontmatter.featuredimage})' }`}*/},


              <Link key={post.id} className="column is-one-quarter" to={post.fields.slug}>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${
                          post.title
                        }`,
                      }}
                    />
                  </div>
                ) : null}
              </Link>

          ))}
      </div>
    )
  }
}

ImageBlogCard.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

// filter: {frontmatter: { templateKey: { eq: "blog-card"} } }
export default () => (
  <StaticQuery
    query={graphql`
      query ImageBlogCardQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
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
      (data, count) => <ImageBlogCard data={data} count={count} />
    }
  />
)
