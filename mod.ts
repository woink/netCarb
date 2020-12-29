interface IResults {
  id: number
  name: string
  image: string
}

let ingredient = prompt("What ingredient are you looking up?")
if (!ingredient) {
  console.error("Please enter an ingredient")
  Deno.exit(1)
}

const KEY = Deno.env.get("SPOON_API")

const ingreSearch = `https://api.spoonacular.com/food/ingredients/search?query=${encodeURIComponent(ingredient)}&apiKey=${KEY}&number=100`

const ingreInfo = `https://api.spoonacular.com/food/ingredients/${id}/information?&apiKey=${KEY}`

const resp = await fetch(ingreSearch)
const data = await resp.json()

if (data.totalResults > 1) {
  data.results.map((el: IResults) => console.log(el.name))
  ingredient = prompt("Multiple results, please enter one...")
}

if (data.totalResults === 1) {
  const res = await fetch(ingreInfo)
}


  

