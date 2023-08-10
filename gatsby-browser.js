/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
