import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Image from "../components/image";

const UsingSSR = ({ data, serverData }) => {
  // const { site } = data;
  // const { dogImage } = serverData;
  // console.log(site, "siteee");
  return (
    <Layout>
      <div>Hello</div>
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
