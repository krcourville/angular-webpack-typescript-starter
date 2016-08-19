const {resolve} = require("path");
const webpack = require("webpack");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractVendorCss = new ExtractTextPlugin({
    filename: "vendor.bundle.css",
    allChunks: true
});
const extractAppCss = new ExtractTextPlugin({
    filename: "main.bundle.css",
    allChunks: true
});

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
                    test: /node_modules.*css$/,
                    loader: extractVendorCss.extract({
                        fallbackLoader: "style-loader",
                        loader: "css?sourceMap"
                    })
                },
                {
                    test: /src.*css$/,
                    loader: extractAppCss.extract({
                        fallbackLoader: "style-loader",
                        loader: "css?sourceMap"
                    })
                },
                {
                    test: /\.png$/,
                    loader: "url"
                },
                {
                    test: /\.jpg$/,
                    loader: "file"
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file?name=fonts/[name].[ext]'
                }
            ]
        },
        plugins: [
            extractVendorCss,

            extractAppCss,

            new CommonsChunkPlugin({
                names: ["vendor"]
            }),
            new ForkCheckerPlugin()
        ]
    };
};
