/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WeekMealPlanTemplate = ({
  content,
  contentComponent,
  description,
  days,
  breakfast,
  title,
  helmet,
  posts
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {/*<PostContent content={content} />*/}
              <div className="table is-full">
                {/* Static Columns */}
                <div className="columns">
                  <div className="column is-one-quarter">
                    Week 1
                  </div>
                  <div className="column is-one-quarter">
                    Breakfast
                  </div>
                  <div className="column is-one-quarter">
                    Lunch
                  </div>
                  <div className="column is-one-quarter">
                    Dinner
                  </div>
                  {console.log(breakfast)}
                </div>
                {/* Dynamic Columns*/}
                {days && days.length ? (
                  <div>
                    {days.map(day => (
                    <div className="columns" key={day}>
                      <div className="column is-one-quarter">
                        {day}
                      </div>
                      <div className="column is-one-quarter">
                        <Link>
                          {day}
                        </Link>
                      </div>
                      <div className="column is-one-quarter">
                        <Link>
                        </Link>
                      </div>
                      <div className="column is-one-quarter">
                        <Link>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                ): null}
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

WeekMealPlanTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const WeekMealPlan = ({ data }) => {
  const { markdownRemark: post } = data
  // console.log(post.frontmatter)
  return (
    <Layout>
      <WeekMealPlanTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | 12 Week Meal Plan">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        days={post.frontmatter.days}
        breakfast={post.frontmatter.breakfast}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        posts={post.frontmatter}
      />
    </Layout>
  )
}

WeekMealPlan.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WeekMealPlan

export const pageQuery = graphql`
  query WeekMealPlanByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        days
        breakfast
      }
    }
  }
`
