import PizzaRepository from '../lib/Repository/PizzaRepository'
import { useState } from 'react'
import { Pizza } from '../lib/Model/Pizza'
import HeroHome from '../components/HeroHome'
import PizzaCard from '../components/PizzaCard'

export async function getServerSideProps() {
  const pizzaRepo = new PizzaRepository()
  let pizzasProps = await pizzaRepo.find4Random()

  return {
    props: { pizzasProps }, // will be passed to the page component as props
  }
}

export default function Home(props: { pizzasProps: Array<Pizza> }) {
  const [pizzas, setPizzas] = useState<Array<Pizza>>(props.pizzasProps)

  return (
    <div className={'bg-body pt-8'}>
      <div className={'container mx-auto'}>
        <HeroHome />
        <h2 className="font-display text-3xl pt-10 mb-6">
          Nos pizzas du moment
        </h2>
        <div className="grid grid-cols-4 gap-16">
          {pizzas.map((pizza, i) => {
            return <PizzaCard key={i} pizza={pizza} />
          })}
        </div>
      </div>
    </div>
  )
}
