// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const merge = require("webpack-merge")

// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//   function getOutput() {
//     switch (stage) {
//       case `develop`:
//         return {
//           filename: `/static/vtour/`,
//         }
//       case `build-javascript`:
//         return {
//           filename: `/static/vtour/`,
//           chunkFilename: `/static/vtour/`,
//         }
//     }
//   }
//   actions.replaceWebpackConfig(merge(getConfig(), { output: getOutput() }))
// }
