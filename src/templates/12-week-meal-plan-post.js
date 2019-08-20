/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WeeklyMealPlanTemplate = ({
  content,
  contentComponent,
  description,
  days,
  breakfast,
  lunch,
  dinner,
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
            <PostContent content={content} />
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
                </div>
                {/* Dynamic Columns*/}
                  <div>
                    <div className="columns">
                      {days && days.length ? (
                        <div className="column is-one-quarter">
                          {days.map(day => (
                            <p key={day}>{day}</p>
                          ))}
                        </div>
                      ): null}

                      {breakfast && breakfast.length ? (
                        <div className="column is-one-quarter">
                          {breakfast.map(morning => (
                            <Link className="table-link" to={`${kebabCase(morning)}`} key={morning}>{ morning }</Link>
                          ))}
                        </div>
                      ): null}

                      {lunch && lunch.length ? (
                        <div className="column is-one-quarter">
                          {lunch.map(afternoon => (
                            <Link className="table-link" to={`${kebabCase(afternoon)}`}>{afternoon}</Link>
                          ))}
                        </div>
                      ): null}

                      {dinner && dinner.length ? (
                        <div className="column is-one-quarter">
                          {dinner.map(evening => (
                            <Link className="table-link" to={`${kebabCase(evening)}`} key={evening}>{evening}</Link>
                          ))}
                        </div>
                      ): null}

                    </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

WeeklyMealPlanTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const WeeklyMealPlan = ({ data }) => {
  const { markdownRemark: post } = data
  // console.log(post.frontmatter)
  return (
    <Layout>
      <WeeklyMealPlanTemplate
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
        lunch={post.frontmatter.lunch}
        dinner={post.frontmatter.dinner}
        title={post.frontmatter.title}
        posts={post.frontmatter}
      />
    </Layout>
  )
}

WeeklyMealPlan.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WeeklyMealPlan

export const pageQuery = graphql`
  query WeeklyMealPlanByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        days
        breakfast
        lunch
        dinner
      }
    }
  }
`
