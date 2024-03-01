import React from "react"
import styles from "./meals-grid.module.css"
import MealItem from "./MealItem"

export type MealTypes = {
  id: number
  slug: string
  title: string
  image: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
}

type Props = {
  meals: MealTypes[]
}

const MealsGrid = ({ meals }: Props) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}

export default MealsGrid
