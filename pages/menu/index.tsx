import PizzaCard from "../../components/PizzaCard";
import { Pizza } from "../../lib/Model/Pizza";
import PizzaRepository from "../../lib/Repository/PizzaRepository";

export async function getServerSideProps() {
    const pizzaRepo = new PizzaRepository();
    let pizzasProps = await pizzaRepo.findAll();
    // @ts-ignore
    pizzasProps = pizzasProps.map(pizza => pizza._rawJson.fields)
    return {
        props: {pizzasProps}, // will be passed to the page component as props
    }
}

export default function Menu({pizzasProps}: {pizzasProps: Array<Pizza>}) {
  return (
    <div className="container mx-auto">
      <h1 className="font-display text-3xl pt-10 mb-6">Menu</h1>
        <div className="grid grid-cols-4 gap-16">
            {pizzasProps.map((pizza, i) => {
                return <PizzaCard key={i} pizza={pizza} />
            })}
            </div>
    </div>
  )
}
