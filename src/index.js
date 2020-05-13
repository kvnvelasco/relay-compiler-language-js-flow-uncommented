/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */
"use strict";

const RelayFlowGenerator = require("relay-compiler/lib").FlowGenerator;

const formatGeneratedModule = require("./formatGeneratedModule");

const { find } = require("relay-compiler/lib").__internal.FindGraphQLTags;

module.exports = () => ({
  inputExtensions: ["js", "jsx"],
  outputExtension: "js",
  typeGenerator: RelayFlowGenerator,
  formatModule: formatGeneratedModule,
  findGraphQLTags: find
});
