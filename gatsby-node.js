"use strict";

require("source-map-support").install();
require("ts-node").register({
  files: true,
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
  include: ["./src/main.d.ts"],
});

const {
  //  onCreatePage,
  //  sourceNodes,
  createPages,
  onCreateNode,
} = require("./gatsby-node/index.ts");

//exports.sourceNodes = sourceNodes;
//exports.onCreatePage = onCreatePage;
exports.createPages = createPages;
exports.onCreateNode = onCreateNode;
