const axios = require('axios');
let entries = process.argv

console.log("process is running, type Control + C to stop...")
if(entries.length >= 3){
  productNumber = entries.slice(2, entries.length)
  productNumber.forEach((element, index, array)=>{
    setInterval(() => {axios.get('https://blackfriday.kabum.com.br/data.json?campanha=blackfriday')
  .then(function (response) {
    let product = response.data.produtos[element]
    
  if (product == undefined) {
      console("Was not able to find products!")
    }
    
    if (product.quantidade > 0) {
      console.log('\u0007')
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })},5000)
  })
} else {
  console.log("You forgot to enter the data, run: node index <product number>")
}


