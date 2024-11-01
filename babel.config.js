// eslint-disable-next-line no-undef
const isESM = process.env.BABEL_ENV === "esm";

const babelConfig = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isESM ? false : "commonjs",
        targets: {
          node: "current",
          chrome: "60",
          firefox: "60",
          safari: "11.1",
          edge: "17",
          ie: "11",
        },
      },
    ],
    "@babel/preset-react",
  ],
};

export default babelConfig;
