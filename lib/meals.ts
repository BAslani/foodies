import { MealTypes } from "@/components/Meals/MealsGrid"
import sql from "better-sqlite3"

const db = sql("meals.db")

export const getMeals = (): MealTypes[] => {
  return db.prepare("SELECT * FROM meals").all() as MealTypes[]
}
