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
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
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
          {/*
            Dynamic Table

            Monday
          */}
          {monday && monday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Monday</p>
              </div>
              {monday.map(mon => (
                <div key={mon + `monday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(monday)}`}>{ mon }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Tuesday*/}
          {tuesday && tuesday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Tuesday</p>
              </div>
              {tuesday.map(tues => (
                <div key={tues + `tuesday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(tuesday)}`}>{ tues }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Wednesday*/}
          {wednesday && wednesday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Wednesday</p>
              </div>
              {wednesday.map(wed => (
                <div key={wed + `wednesday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(wednesday)}`}>{ wed }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Thursday*/}
          {thursday && thursday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Thursday</p>
              </div>
              {thursday.map(thurs => (
                <div key={thurs + `thursday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(thursday)}`}>{ thurs }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Friday*/}
          {friday && friday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Friday</p>
              </div>
              {friday.map(fri => (
                <div key={fri + `friday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(friday)}`}>{ fri }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Saturday*/}
          {saturday && saturday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Saturday</p>
              </div>
              {saturday.map(sat => (
                <div key={sat + `saturday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(saturday)}`}>{ sat }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Sunday*/}
          {sunday && sunday.length ? (
            <div className="columns">
              <div className="table-cell recipes-lead column is-one-quarter">
                <p>Sunday</p>
              </div>
              {sunday.map(sun => (
                <div key={sun + `sunday`} className="table-cell recipes-lead column is-one-quarter">
                  <Link className="table-link" to={`/recipes/${kebabCase(sunday)}`}>{ sun }</Link>
                </div>
              ))}
            </div>
          ): null}
          {/*Table closing*/}
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
        title={post.frontmatter.title}

        monday={post.frontmatter.monday}
        tuesday={post.frontmatter.tuesday}
        wednesday={post.frontmatter.wednesday}
        thursday={post.frontmatter.thursday}
        friday={post.frontmatter.friday}
        saturday={post.frontmatter.saturday}
        sunday={post.frontmatter.sunday}

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
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
      }
    }
  }
`
