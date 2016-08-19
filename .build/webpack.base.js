const {resolve} = require("path");
const webpack = require("webpack");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const root = resolve(__dirname, "../");

const extractVendorCss = new ExtractTextPlugin({
    filename: "vendor.bundle.css",
    allChunks: true
});


module.exports = env => {
    const envConfig = env.prod ? prodConfig : devConfig;

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
            path: resolve(root, "dist"),
            pathinfo: !env.prod
        },
        devtool: env.prod ? "source-map" : "cheap-module-eval-source-map",
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
                    loader: 'raw'
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
            ].concat(envConfig.loaders)
        },
        plugins: [
            extractVendorCss,

            new CommonsChunkPlugin({
                names: ["vendor"]
            }),
            new ForkCheckerPlugin(),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "src/index.ejs"
            })
        ].concat(envConfig.plugins)
    };
};
