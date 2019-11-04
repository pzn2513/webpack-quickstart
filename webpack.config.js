const hwp=require('Html-webpack-plugin')
let getHtml=function(name){
    return new hwp({
        template:'./src/view/'+name,
        filename:name,//输出路径，以ouput的path作为相对路径
        inject:'body',//为true或'body'将js资源放置在底部，为'head'放置在head中
        hash:true,//将webpack打包的脚本和资源文件附加一个独特的hash，对清楚缓存非常有用。
    })
}

module.exports = {
    entry: {
        'index':['./src/index.js']
    },
    output: {
        // filename: '[name].bundle.js',
        filename:'[name].js',
        path: __dirname + '/dist'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new (require('clean-webpack-plugin').CleanWebpackPlugin),
        getHtml('index.html'),
        getHtml('new.html'),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(img|png|svg|jpg|gif|bmp|webp)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'images'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'fonts'
                        }
                    }
                ]
            }
        ]
    }
}
