const {resolve} = require("path");
const webpack = require("webpack");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = env => {
    return {
        entry: {
            "vendor": "./src/vendor/index.ts",
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
                }
            ]
        },
        plugins: [
            new ForkCheckerPlugin()
        ]
    };
};
