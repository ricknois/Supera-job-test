interface Box<Type> {
  contents: Type;
}
interface StringBox {
  [key: string]: string;
  // "super-mario-odyssey.png": Function,
  // "call-of-duty-infinite-warfare.png": Function,
  // "call-of-duty-wwii.png": Function,
  // "fifa-18.png": Function,
  // "horizon-zero-dawn.png": Function,
  // "mortal-kombat-xl.png": Function,
  // "shards-of-darkness.png": Function,
  // "terra-media-sombras-de-mordor.png": Function,
  // "the-witcher-iii-wild-hunt.png": Function,
}


export const images: StringBox = {
  "super-mario-odyssey.png": require("./super-mario-odyssey.png"),
  "call-of-duty-infinite-warfare.png": require("./call-of-duty-infinite-warfare.png"),
  "call-of-duty-wwii.png": require("./call-of-duty-wwii.png"),
  "fifa-18.png": require("./fifa-18.png"),
  "horizon-zero-dawn.png": require("./horizon-zero-dawn.png"),
  "mortal-kombat-xl.png": require("./mortal-kombat-xl.png"),
  "shards-of-darkness.png": require("./shards-of-darkness.png"),
  "terra-media-sombras-de-mordor.png": require("./terra-media-sombras-de-mordor.png"),
  "the-witcher-iii-wild-hunt.png": require("./the-witcher-iii-wild-hunt.png"),
}
