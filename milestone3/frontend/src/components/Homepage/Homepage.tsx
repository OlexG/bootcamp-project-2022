import { Recipe } from "../../types"
import { useEffect, useState } from "react"
import RecipePreview from "../RecipePreview/RecipePreview"
export default function Homepage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("/recipe")
      const recipes = await response.json()
      setRecipes(recipes)
    }
    try {
      fetchRecipes()
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <div className="main">
      <h2>Welcome to Oleks's Kitchen, where we cook traditional Ukrainian Food</h2>
      <div className="recipeBoxContainer">
        {
          recipes.map((recipe) => {
            return (
              <RecipePreview 
                recipeName={recipe.name} 
                recipeDescription={recipe.description}
                recipeImage={recipe.image}
                key={recipe.name}
              />
            )
          })
        }
      </div>
    </div>
  )
}