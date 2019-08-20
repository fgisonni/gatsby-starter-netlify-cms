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
  tags
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
                  <div className="table-inner">
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
                            <div key={morning + `morning`}>
                              <Link className="table-link" to={`/12-week-meal-plan/${kebabCase(morning)}`}>{ morning }</Link>
                            </div>
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
  return (
    <Layout>
      <WeeklyMealPlanTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | 12 Week Meal Guides">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        days={post.frontmatter.days}
        breakfast={post.frontmatter.breakfast}
        lunch={post.frontmatter.lunch}
        dinner={post.frontmatter.dinner}
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

export const weeklyPageQuery = graphql`
  query WeeklyMealPlanByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
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
