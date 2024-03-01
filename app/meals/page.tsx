import styles from "./page.module.css"
import Link from "next/link"
import MealsGrid, { MealTypes } from "@/components/Meals/MealsGrid"
import { getMeals } from "@/lib/meals"

const Meals = async () => {
  const meals: MealTypes[] = getMeals()

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href={"/meals/share"}>Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  )
}

export default Meals
