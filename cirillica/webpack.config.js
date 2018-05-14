const path = require("path");

module.exports = {
  entry:
  {
      index : './src/index.js',
      news :'./src/news.js',
      booking :'./src/booking-index.js',
      perfomance :'./src/perfomance-index.js',
	  admin:'./src/admin.js',
	  signup:'./src/signup-index.js',
      input:'./src/input-index.js',
      people_theater: './src/people-index.js'
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
                            name: './fonts/[hash].[ext]',
                        },
                    },
                ]
            },
            {
                test: /\.otf$/,
                use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './fonts/[hash].[ext]',
                        },
                    },
                ]
            }
		]
	},
	
}