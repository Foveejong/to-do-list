const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    output: {
        // remember to change back to bundle.js or main.js
        filename: "main.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do List',
            filename: 'index.html',
            template: './src/index.html',
            scriptLoading: 'defer',
            inject: "head",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ]
    },
    // optimization: {
    //     runtimeChunk: "single",
    // },
}