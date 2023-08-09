import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      project: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date
            featuredImg {
              childImageSharp {
                gatsbyImageData(
                  width: 250
                  height: 250
                  blurredOptions: { width: 100 }
                )
              }
            }
            liveSite
            slug
            stack
            thumb {
              childImageSharp {
                gatsbyImageData(
                  width: 250
                  height: 250
                  blurredOptions: { width: 100 }
                )
              }
            }
            title
          }
        }
      }
      site: site {
        siteMetadata {
          contact
        }
      }
    }
  `);

  const projects = data.project.nodes;
  const site = data.site.siteMetadata;
  console.log(data, "data");
  //   console.log(projects, "projects")

  return (
    <Layout>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Portfolio</h2>
        <h3>Project & Website I`ve Created</h3>
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {projects.map((project) => (
            <Link
              style={{ textDecoration: "none", color: "skyblue" }}
              to={`/projects/${project.frontmatter.slug}`}
            >
              <div
                style={{
                  padding: "30px",
                  border: "1px solid black",
                  marginTop: "100px",
                }}
              >
                <GatsbyImage
                  image={getImage(project.frontmatter.featuredImg)}
                  alt="Image"
                />
                <h2>{project.frontmatter.title}</h2>
              </div>
            </Link>
          ))}
        </div>
        <h3 style={{ marginTop: "100px" }}>{site.contact}</h3>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default Project;
