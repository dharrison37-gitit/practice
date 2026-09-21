import path from "node:path";

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
            meta: {
                charset: "UTF-8",
                viewport: "width=device-width, initial-scale=1",
            },
            title: "Practice JS Production",
        },
    },
};
