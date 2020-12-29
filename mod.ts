interface INutrients {
  title: string
  amount: number
  unit: string
  percentOfDailyNeeds: number
}

const ingredient = prompt("What ingredient are you looking up?")
if (!ingredient) {
  console.error("Please enter an ingredient")
  Deno.exit(1)
}

const KEY = Deno.env.get("SPOON_API")

const ingreSearch = `https://api.spoonacular.com/food/ingredients/search?query=${encodeURIComponent(ingredient)}&apiKey=${KEY}&number=1`

const resp = await fetch(ingreSearch)
const data = await resp.json()

const ingreDetails = data.results[0]

const ingreInfo = `https://api.spoonacular.com/food/ingredients/${ingreDetails.id}/information?amount=1&apiKey=${KEY}`

const respInfo = await fetch(ingreInfo)
const dataInfo = await respInfo.json()

const ingreNetCarb = dataInfo.nutrition.nutrients.find((el: INutrients) => el.title === "Net Carbohydrates")
const ingreSugar = dataInfo.nutrition.nutrients.find((el: INutrients) => el.title === "Sugar")


console.log(`${ingreDetails.name}`)
console.log(`${ingreNetCarb.amount}${ingreNetCarb.unit} ${ingreNetCarb.title}`)
console.log(`${ingreSugar.amount}${ingreSugar.unit} ${ingreSugar.title}`)