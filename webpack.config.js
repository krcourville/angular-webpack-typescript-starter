const {resolve} = require("path");
const webpack = require("webpack");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const isVendorJs = /node_modules.*[tj]s$/;
// const isVendorCss = /node_modules.*\.css$/;

module.exports = env => {
    return {
        entry: {
            "vendor": [
                "moment",
                "angular",
                "angular-animate",
                "angular-aria",
                "angular-material",
                "angular-ui-router",
                "jquery"
            ],
            // "vendor-css": [
            //     "angular-material/angular-material.css"
            // ],
            "main": "./src/app/index.ts",
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
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                // {
                //     test: /\.css$/,
                //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                // },
                {
                    test: /\.png$/,
                    loader: "url-loader"
                },
                {
                    test: /\.jpg$/,
                    loader: "file-loader"
                }
            ]
        },
        plugins: [
            // new ExtractTextPlugin("[name].css"),

            new CommonsChunkPlugin({
                names: ["vendor"]
            }),
            new ForkCheckerPlugin()
        ]
    };
};
