#!/usr/bin/env node
// Stub PnP manifest — prevents esbuild from traversing up to the global ~/.pnp.cjs.
// This project uses pnpm with node_modules, not Yarn PnP.
// Returning null from resolveRequest tells esbuild to fall back to node_modules resolution.
'use strict';

exports.VERSIONS = { std: 1 };
exports.setup = function() {};
exports.getDependencyTreeRoots = function() { return []; };
exports.getPackageInformation = function() { return null; };
exports.resolveRequest = function() { return null; };
exports.resolveVirtual = function(path) { return path; };
exports.resolveToUnqualified = function() { return null; };
exports.resolveUnqualified = function(path) { return path; };
exports.findPackageLocator = function() { return null; };
exports.getLocator = function(name, ref) { return { name, reference: ref }; };
