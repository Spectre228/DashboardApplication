const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Режим сборки
  mode: 'development',

  // 2. Точка входа
  entry: './src/index.js',

  // 3. Выходной бандл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Очищает папку dist перед каждой сборкой
  },

  // 4. Модули и правила обработки файлов (Лоадеры)
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,         // Какие файлы искать (js и jsx)
        exclude: /node_modules/,     // Игнорировать папку node_modules
        use: {
          loader: 'babel-loader',    // Передавать эти файлы в Babel
          options: {
            // Прописываем пресеты прямо здесь, чтобы Webpack точно их применил
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { 'runtime': 'automatic' }]
            ]
          }
        },
      },
      {
        test: /\.(css|scss|sass)$/,              // Какие файлы искать (css)
        use: ['style-loader', 'css-loader', 'sass-loader'], // Порядок важен: справа налево!
      },
    ],
  },

  // 5. Разрешение расширений файлов
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],     // Позволяет опускать расширения при импорте
  },

  // 6. Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон вашего HTML-файла
    }),
  ],

  // 7. Конфигурация локального сервера
  devServer: {
    port: 3000,                      // Порт, на котором запустится проект
    open: true,                      // Автоматически открывать браузер
    hot: true,                       // Включить Hot Module Replacement (HMR)
    historyApiFallback: true,        // Нужно для работы React Router (если будет)
  },
};