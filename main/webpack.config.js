const path = require("path");

module.exports = {
  entry:
  {
	app1 : './src/index.js',
	app2 :'./src/news.js',
	app3 :'./src/booking-index.js',
	app4 :'./src/perfomance-index.js',
  } , 
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
					presets: ['es2015', 'stage-1', 'react']
				},
				
			},
			
	
			
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
			test: /\.(jpg)$/,
			use: 
			[{
				loader: 'url-loader',
			},]
		},
		{
			test: /\.(png)$/,
			use: 
			[{
				loader: 'url-loader',
			},]
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