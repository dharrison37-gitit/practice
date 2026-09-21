import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        htmlFilename: "index.html",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
        html: {
            title: "Practice JS Production",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
};
