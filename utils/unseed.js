const axios = require("axios")

async function main() {
  console.log(`Start unseeding ...`);
  try{
    const {data: {results: categories}} = await axios.get("http://localhost:8080/dev/categories")
    console.log("Obtained -- ", categories.length, " Categories")
    await Promise.all(categories.map(cat => axios.delete(`http://localhost:8080/dev/categories/${cat.id}`)))

    const {data: {results: products}} = await axios.get("http://localhost:8080/dev/products")
    console.log("Obtained -- ", products.length, " Products")
    await Promise.all(products.map(prod => axios.delete(`http://localhost:8080/dev/products/${prod.id}`)))
  } catch(e){
    console.log(e)
  }
  console.log(`Unseeding finished.`);
}

main();