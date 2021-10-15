import React from "react"
import { graphql, Link } from "gatsby"
import * as blogStyles from "./blog.module.css"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
     subtitle
      image {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
     content{
       json
     }
      }
  }
`

const BlogPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulPost.title} />
      <button className={blogStyles.blogbutton} >
      <Link to="/blog/" className={blogStyles.bloglink}>Visit the Blog Page</Link>
      </button>
      <br/>
      <br/>
      <br/>
      <div className="content" align="justify">
        <h1>{props.data.contentfulPost.title}</h1>
        <h3 align="center">{props.data.contentfulPost.subtitle}</h3>

        {props.data.contentfulPost.image && (
          <Img
            className="featured"
            fluid={props.data.contentfulPost.image.fluid}
            alt={props.data.contentfulPost.title}
          />
        )}
        <br/>
    {documentToReactComponents(
          props.data.contentfulPost.content.json,
        )}

      </div>
    </Layout>
  )
}

export default BlogPost
