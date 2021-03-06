module.exports = {
    entry: './components/app.js',
    output: {
        path: './',
        fileName: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
                    {   
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel',
                        query:{
                          presets: ['es2015','react']
                        }
                    }
                ]
            }
}