import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout.js"
import * as styles from "../components/project-details.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo.js"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, liveSite, featuredImg } =
    data.markdownRemark.frontmatter
  console.log(data)
  return (
    <Layout>
      <div className={styles.details}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginRight: "5px",
            }}
          >
            <h2>{title}</h2>
          </div>

          <div
            style={{
              marginLeft: "5px",
              display: "flex",
              flexWrap: "wrap",
              marginBottom: "15px",
              alignContent: "flex-end",
            }}
          >
            {/* <Link className={styles.btn} to={liveSite}>
              Live Preview
            </Link> */}
          </div>
        </div>

        <h3>
          Created with: {"  -"} {stack}
        </h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featuredImg)} alt="Image" />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  return <Seo title={title} />
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        liveSite
        featuredImg {
          childImageSharp {
            gatsbyImageData(width: 500, blurredOptions: { width: 100 })
          }
        }
      }
    }
  }
`
