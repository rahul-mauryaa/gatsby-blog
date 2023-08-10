import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <div>
          <h2>Design</h2>
          <h3>Devlop & deploy</h3>
          <p>Ux desigener & webdevloper</p>
        </div>
        <StaticImage
          src="../images/internet.jpg"
          alt="A Banner Image"
          placeholder="blurred"
          layout="fixed"
          width={500}
          height={500}
        />
      </section>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "internet.jpg" }) {
//       childImageSharp {
//         fluid {
//           src
//           sizes
//           srcSet
//         }
//       }
//     }
//   }
// `

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
