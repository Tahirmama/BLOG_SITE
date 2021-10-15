import React from "react"
import { Link } from "gatsby"
import blog from '../images/blog.gif'
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as containerStyles from "./container.module.css"

const IndexPage = () => (
  <Layout >
    <SEO title="Home" />
    <div align="center">
    <h1>WELCOME TO OUR BLOG SITE.</h1>
    </div>
    <div className={containerStyles.body} >
    <img src={blog} alt="BlogSite" title="Blog" width="50%" />
<p className={containerStyles.para}>
  Conversation is king. Content is just something to talk about.
  <br/><i> "~Cory Doctorow"</i></p>
    </div>
    <br/>
    <br/>
    <div align="center">
    <button className={containerStyles.bodybutton} >
    <Link to="/blog/" className={containerStyles.bodylink}>Visit the Blog Page</Link>
 </button>
 </div>
  </Layout>
)

export default IndexPage
