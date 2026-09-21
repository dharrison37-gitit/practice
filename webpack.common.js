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
            title: "Production",
        },
    },
};
