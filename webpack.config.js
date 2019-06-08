const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/',
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ]
                },
            },
        ],
    },
};

module.exports = config;