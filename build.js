const fs = require("fs");
const ncp = require('ncp').ncp;
const path = require("path");
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const babelify = require("babelify");
const watchify = require('watchify');
const browserify = require("browserify");
const browserifyShim = require("browserify-shim");

const argv = yargs(hideBin(process.argv)).argv;

// START Build options/paths

const srcDir = "src";
const buildDir = "build";
const copyFileToBuildDirPaths = [
    path.join(srcDir, "index.html"),
    path.join(srcDir, "main.css"),
];
const copyDirectoryToBuildDirPaths = [
    "assets"
];
const mainJSPath = path.join(srcDir, "js/main.js");
const bundleJSPath = path.join(buildDir, "bundle.js");

// END Build options/paths

// Delete 'buildDir'
if (fs.existsSync(buildDir)) {
    console.info("Deleting contents of build directory: %s", buildDir);
    fs.rmdirSync(buildDir, { recursive: true });
    fs.mkdirSync(buildDir)
}

// Copy files defined in 'copyFileToBuildDirPaths'
for (let pathIndex = 0; pathIndex < copyFileToBuildDirPaths.length; pathIndex++) {
    let fromPath = copyFileToBuildDirPaths[pathIndex];
    let toPath = path.join(buildDir, path.basename(fromPath));

    console.info("Copying file %s to %s", fromPath, toPath);

    fs.copyFileSync(fromPath, toPath);
}

// Copy directories recursively defined in 'copyDirectoryToBuildDirPaths'
for (let pathIndex = 0; pathIndex < copyDirectoryToBuildDirPaths.length; pathIndex++) {
    let fromPath = copyDirectoryToBuildDirPaths[pathIndex];
    let toPath = path.join(buildDir, path.basename(fromPath));

    console.info("Copying directory %s to %s", fromPath, toPath);

    ncp.ncp(fromPath, toPath, (err) => {
        if (err) throw err;
    });
}

console.info("Browserifying...");
let iBrowserify = browserify(mainJSPath, {cache: {}, packageCache: {}});
applyTransforms(iBrowserify);
bundle();

if (argv.watchify) {
    console.info("Watching JS file: " + mainJSPath);

    iBrowserify.plugin(watchify);
    iBrowserify.on("update", bundle);
    iBrowserify.on('log', function (msg) {
        console.log(msg)
    });
}

function applyTransforms(iBrowserify) {
    iBrowserify.transform(babelify, {
        presets: ["@babel/preset-env"]
    }).transform(browserifyShim, {
        global: true
    })
}

function bundle() {
    iBrowserify.bundle().on("error", console.error).pipe(fs.createWriteStream(bundleJSPath));
}
