const axios = require('axios')

const categoryData = [
  {
    name: "Accessories",
    products: [
        {
          name: "Butler - Tortoise frame with Rust Mirror ",
          price: 35,
          image: "https://asset-train.twic.pics/images/shades-1.jpg",
          details:
            "The Butler is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Slate Sunglassse",
          price: 30,
          image: "https://asset-train.twic.pics/images/shades-2.jpg",
          details:
            "The Slate Sunglasses are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Super Bass Headphones",
          price: 60,
          image: "https://asset-train.twic.pics/images/headphone-1.jpg",
          details:
            "The Super Bass Headphones is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
      ],
  },
  {
    name: "Shoes",
    products: [
        {
          name: "Baby Shoes",
          price: 22,
          image: "https://asset-train.twic.pics/images/shoes-1.jpg",
          details:
            "The Baby Shoes are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Super MVP Sneakers",
          price: 87,
          image: "https://asset-train.twic.pics/images/shoes-2.jpg",
          details:
            "The Super MVP Sneakers are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Hip Kicks",
          price: 38,
          image: "https://asset-train.twic.pics/images/shoes-3.jpg",
          details:
            "The Hip Kicks are our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
      ],
  },
  {
    name: "Furniture",
    products: [
        {
          name: "Brown Furry Leather",
          price: 120,
          image: "https://asset-train.twic.pics/images/chair-1.jpg",
          details:
            "The Brown Furry Leather is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Wooden Relax",
          price: 180,
          image: "https://asset-train.twic.pics/images/chair-2.jpg",
          details:
            "The Wooden Relax is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
        {
          name: "Light Leather Sofa",
          price: 180,
          image: "https://asset-train.twic.pics/images/sofa-1.jpg",
          details:
            "The Light Leather Sofa is our restyled and redesigned classic. It's an ultra-reliable choice for all with it's medium size and timeless wire accents.",
        },
      ],
    },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const cat of categoryData) {
    const categoryProducts = cat.products;
    delete cat.products;
    try{
      const {data: catResponseData} = await axios.post('http://localhost:8080/dev/categories', cat)
      console.log(`Created category with id: ${catResponseData.id}`);
      const productResponses = await Promise.all(categoryProducts.map(item => axios.post('http://localhost:8080/dev/products', Object.assign(item, {category: catResponseData}))));
      console.log(`Added ${productResponses.length} items to category with id: ${catResponseData.id}`);
    } catch(e){
      console.log(e)
    }
    
  }
  console.log(`Seeding finished.`);
}

main();