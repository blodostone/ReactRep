const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'review_build')
    },
    module: {
        rules: [{
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};