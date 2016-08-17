const {resolve} = require("path");
const webpack = require("webpack");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const isVendorJs = /node_modules.*[tj]s$/;

module.exports = env => {
    return {
        entry: {
            // "vendor-css": "./src/vendor/styles.ts",
            "main": "./src/app/index.ts"
        },
        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[id].bundle.js",
            path: resolve(__dirname, "dist"),
            pathinfo: !env.prod
        },
        devtool: env.prod ? "source-map" : "cheap-module-eval-source-map",
        // devtool: "source-map",
        bail: env.prod,
        resolve: {
            extensions: ['', '.ts', '.js', '.json', ".html"],
            modulesDirectories: ['node_modules']
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: "awesome-typescript"
                },
                {
                    test: /\.html$/,
                    loader: 'raw',
                    exclude: resolve(__dirname, "/src/index.html")
                },
                {
                    test: /src.*\.js$/,
                    loaders: ['ng-annotate']
                }
            ]
        },
        plugins: [
            new CommonsChunkPlugin({
                name: "vendor-js",
                filename: "vendor.bundle.js",
                minChunks: function(module) {
                    return isVendorJs.test(module.userRequest);
                }
            }),
            new ForkCheckerPlugin()
        ]
    };
};
