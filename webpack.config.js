const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack")

module.exports = env => {
    return {

        entry: {
            app: "./src/index.js",
            'production-dependencies': ["phaser"]
        },

        output: {
            path: path.resolve(__dirname, "build"),
            filename: "app.bundle.js"
        },

        mode: env && env.production ? "production" : "development",

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, "src/"),
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    }
                },
                {
                    test: [/\.vert$/, /\.frag$/],
                    use: 'raw-loader'
                }
            ]
        },

        // devtool: "source-map",

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        name: 'production-dependencies',
                        chunks: 'initial',
                        minChunks: 2,
                        filename: 'production-dependencies.bundle.js'
                    }
                },
            }
        },

        devServer: {
            contentBase: path.resolve(__dirname, "build"),
        },

        resolve: {
            alias: {
                "src": path.resolve(__dirname, "src")
            }
        },

        plugins: [
            new copyWebpackPlugin([
                {
                    from: path.resolve(__dirname, "index.html"),
                    to: path.resolve(__dirname, "build"),
                },
                {
                    from: path.resolve(__dirname, 'assets', '**', '*'),
                    to: path.resolve(__dirname, 'build')
                }
            ]),

            new webpack.DefinePlugin({
                "CANVAS_RENDERER": JSON.stringify(true),
                "WEBGL_RENDERER": JSON.stringify(true)
            }),

            // new webpack.optimize.CommonsChunkPlugin({
            //     name: "production-dependencies",
            //     filename: "production-dependencies.bundle.js"
            // }),
        ]
    }
}