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
              author
              image {
                fluid(maxWidth: 750) {
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
      <br/>
      <ul className="posts">
      
        {data.allContentfulPost.edges.map(edge => {
          
          return (
            <div className={containerStyles.blog}>
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>    
            <h3> Author is :<i> {edge.node.author}</i></h3> 
            <div className={containerStyles.blg}>   
              {edge.node.image && (
                <Img
                className={containerStyles.image}
                  fluid={edge.node.image.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className={containerStyles.excerpt}>
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              </div>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          </div>
          )
  
        })}
      </ul>
      
      <button className={containerStyles.blogbutton} >
        <Link to="/" className={containerStyles.bloglink}>{"<= "}BACK TO HOME PAGE</Link>
      </button>
    </Layout>
  )
}

export default Blog
