interface IResults {
  id: number
  name: string
  image: string
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

const ingreID = data.results[0].id

const ingreInfo = `https://api.spoonacular.com/food/ingredients/${ingreID}/information?amount=1&apiKey=${KEY}`

const respInfo = await fetch(ingreInfo)
const dataInfo = await respInfo.json()

console.log(dataInfo)