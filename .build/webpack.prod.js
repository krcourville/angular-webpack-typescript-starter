const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractAppScss = new ExtractTextPlugin({
    filename: "main.bundle.css",
    allChunks: true
});

module.exports = {
    loaders: [
        {
            test: /src.*s?css$/,
            loader: extractAppScss.extract({
                fallbackLoader: "style-loader",
                loader: "css?sourceMap!sass?sourceMap"
            })
        }
    ],
    plugins: [
        extractAppScss
    ]
}