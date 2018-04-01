const path = require("path");

module.exports = {
  entry:
  {app1 : './src/index.js',
  app2 :'./src/news.js', } , 
  output: 
  {
    filename: '[name].js',
	path: path.resolve(__dirname, "dist")
  },
 
  module: 
	{
		rules: 
		[
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 
			{
				loader: 'babel-loader',
				options: 
				{
					presets: ['es2015', 'react']
				}
			}
		},
		{
			test: /\.(css)$/,
			use: 
			[{
				loader: 'style-loader',
			}, 
			{
				loader: 'css-loader',
			}]
		},
		{
          test: /\.ttf$/,
          use: [
            {
              loader: 'ttf-loader',
              options: {
                name: './font/[hash].[ext]',
              },
            },
          ]
      }
		]
	},
	
}