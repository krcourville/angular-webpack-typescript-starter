module.exports = {
    plugins: [],
    loaders: [
        {
            test: /src.*s?css$/,
            loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        }
    ]
}