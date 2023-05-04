const images = {};

function importAll(r) {
  r.keys().forEach((key) => {
    images[key] = r(key).default;
  });
}

importAll(require.context("./images", true, /\.(png|jpe?g|svg)$/));

export default images;
