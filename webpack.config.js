const {resolve} = require("path");
const webpack = require("webpack");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const isAppModule = new RegExp("src/app");

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
        devtool: "source-map",
        bail: env.prod,
        resolve: {
            extensions: ['', '.ts', '.js', '.json', ".html"],
            modulesDirectories: ['node_modules'],
            // alias: {
            //     moment: "moment/moment"
            //
            // }
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
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "vendor.bundle.js",
                minChunks: function(module) {
                    return !isAppModule.test(module.userRequest);
                }
            }),
            new ForkCheckerPlugin()
        ]
    };
};
