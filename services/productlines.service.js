const db = require("../config/db.config");

let productLines = [
  {
    id: 1,
    description:
      "Attention car enthusiasts: Make your wildest car ownership dreams come true. Whether you are looking for classic muscle cars, dream sports cars or movie-inspired miniatures, you will find great choices in this category. These replicas feature superb attention to detail and craftsmanship and offer features such as working steering system, opening forward compartment, opening rear trunk with removable spare wheel, 4-wheel independent spring suspension, and so on. The models range in size from 1:10 to 1:24 scale and include numerous limited edition and several out-of-production vehicles. All models include a certificate of authenticity from their manufacturers and come fully assembled and ready for display in the home or office.",
  },
  {
    id: 2,
    description:
      "Our motorcycles are state of the art replicas of classic as well as contemporary motorcycle legends such as Harley Davidson, Ducati and Vespa. Models contain stunning details such as official logos, rotating wheels, working kickstand, front suspension, gear-shift lever, footbrake lever, and drive chain. Materials used include diecast and plastic. The models range in size from 1:10 to 1:50 scale and include numerous limited edition and several out-of-production vehicles. All models come fully assembled and ready for display in the home or office. Most include a certificate of authenticity.",
  },
  {
    id: 3,
    description:
      "Unique, diecast airplane and helicopter replicas suitable for collections, as well as home, office or classroom decorations. Models contain stunning details such as official logos and insignias, rotating jet engines and propellers, retractable wheels, and so on. Most come fully assembled and with a certificate of authenticity from their manufacturers.",
  },

  {
    id: 4,
    description:
      "The perfect holiday or anniversary gift for executives, clients, friends, and family. These handcrafted model ships are unique, stunning works of art that will be treasured for generations! They come fully assembled and ready for display in the home or office. We guarantee the highest quality, and best value.",
  },
];
let nextId = 5;

exports.getProductLines = (data, callback) => {
  let error = false;
  if (error) {
    return callback(error);
  }
  return callback(null, productLines);
};

exports.postProductLines = (data, callback) => {
  if (data.description) {
    let newProductLine = Object.assign({ id: nextId++ }, data);
    productLines.push(newProductLine);
    console.log(productLines);
    return callback(null, productLines);
  } else {
    return callback("Missing description");
  }

};
