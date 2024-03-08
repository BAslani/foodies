import { MealTypes } from "@/components/Meals/MealsGrid"
import sql from "better-sqlite3"

const db = sql("meals.db")

export const getMeals = (): MealTypes[] => {
  return db.prepare("SELECT * FROM meals").all() as MealTypes[]
}

export const getMeal = (slug: string): MealTypes => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as MealTypes
}
