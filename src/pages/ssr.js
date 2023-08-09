import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Image from "../components/image";

const UsingSSR = () => {
  // { data, serverData }
  const [data, setData] = React.useState([]);

  const sitedata = useStaticQuery(graphql`
    query PageData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  async function fetchData() {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`Response failed`);
      } else {
        setData(data);
      }
    } catch (error) {
      return {
        status: 500,
        headers: {},
        props: {},
      };
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const { site } = sitedata;
  const { message } = data;
  console.log(site, "siteee");

  return (
    <Layout>
      <h1>
        This page is <b>rendered server-side</b>
      </h1>
      <p>
        This page is rendered server side every time the page is requested.
        Reload it to see a(nother) random photo from{" "}
        <code>dog.ceo/api/breed/shiba/images/random</code>:
      </p>
      <Image img={message} />
      <p>
        To learn more, head over to our{" "}
        {/* <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a> */}
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const Head = () => <Seo title="Using SSR" />;

// export const pageQuery = graphql`
//   query PageData {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default UsingSSR;

// export async function getServerData() {
//   try {
//     const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
//     const data = await res.json();
//     if (!res.ok) {
//       throw new Error(`Response failed`);
//     }
//     return {
//       props: {
//         dogImage: data,
//       },
//     };
//   } catch (error) {
//     return {
//       status: 500,
//       headers: {},
//       props: {},
//     };
//   }
// }
