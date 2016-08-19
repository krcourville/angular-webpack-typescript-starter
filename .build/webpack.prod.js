const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractAppCss = new ExtractTextPlugin({
    filename: "main.bundle.css",
    allChunks: true
});

module.exports = {
    loaders: [
        {
            test: /src.*css$/,
            loader: extractAppCss.extract({
                fallbackLoader: "style-loader",
                loader: "css?sourceMap"
            })
        }
    ],
    plugins: [
        extractAppCss
    ]
}