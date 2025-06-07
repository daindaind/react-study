module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx$/, // .jsx 파일에 대해
        exclude: /node_modules/, // node_modules는 제외
        use: {
          loader: "babel-loader", // babel-loader 사용
          options: {
            presets: [
              "@babel/preset-env", // 최신 JS 문법을 변환
              "@babel/preset-react", // JSX 문법 처리
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // .js와 .jsx 파일을 처리
  },
  entry: {
    main: "./srcs/main.jsx", // 최초에 webpack 빌드가 시작되는 위치,
  },
  output: {
    filename: "bundle.js", // bundling한 결과물,
  }, // 설정하지 않으면 자동으로 dist 폴더에 생성됨,
};
