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
      <div className="container content page-padding">
        <h1 className="title is-size-5 is-bold-light">
          {title}
        </h1>
        <p>{description}</p>
        <PostContent content={content} />
          <div className="table is-full">
            {/* Static Columns */}
            <div className="columns">
              <div className="column is-one-quarter table-cell">
                {title}
              </div>
              <div className="column is-one-quarter column-title table-cell">
                Breakfast
              </div>
              <div className="column is-one-quarter column-title table-cell">
                Lunch
              </div>
              <div className="column is-one-quarter column-title table-cell">
                Dinner
              </div>
            </div>
            {/* Dynamic Columns*/}
              <div className="table-inner">
                <div className="columns">
                  {days && days.length ? (
                    <div className="column is-one-quarter">
                      {days.map(day => (
                        <div className="table-cell days">
                          <p key={day}>{day}</p>
                        </div>
                      ))}
                    </div>
                  ): null}

                  {breakfast && breakfast.length ? (
                    <div className="column is-one-quarter">
                      {breakfast.map(morning => (
                        <div key={morning + `morning`} className="table-cell recipes-lead">
                          <Link className="table-link" to={`${kebabCase(morning)}`}>{ morning }</Link>
                        </div>
                      ))}
                    </div>
                  ): null}

                  {lunch && lunch.length ? (
                    <div className="column is-one-quarter">
                      {lunch.map(afternoon => (
                        <div key={afternoon + `afternoon`} className="table-cell recipes-lead">
                          <Link className="table-link" to={`${kebabCase(afternoon)}`}>{ afternoon }</Link>
                        </div>
                      ))}
                    </div>
                  ): null}

                  {dinner && dinner.length ? (
                    <div className="column is-one-quarter">
                      {dinner.map(evening => (
                        <div key={evening + `evening`} className="table-cell recipes-lead">
                          <Link className="table-link" to={`${kebabCase(evening)}`}>{ evening }</Link>
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
          <Helmet titleTemplate="%s | Weekly Meal Plans">
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
