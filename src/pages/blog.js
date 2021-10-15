import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as containerStyles from "./container.module.css"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPost{
          edges {
            node {
              title
              id
              slug
              subtitle
              image {
                fluid(maxWidth: 550) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog" />

      <button className={containerStyles.blogbutton} >
        <Link to="/" className={containerStyles.bloglink}>{"<= "}BACK TO HOME PAGE</Link>
      </button>
      <br/>
      <br/>
      <br/>
      <ul className="posts">
        {data.allContentfulPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>        
              {edge.node.image && (
                <Img
                  className="featured"
                  fluid={edge.node.image.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
