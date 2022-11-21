import { RequestContext } from "next/dist/server/base-server";
import Image from "next/image";
import { Pizza } from "../../lib/Model/Pizza";
import PizzaRepository from "../../lib/Repository/PizzaRepository";


export async function getServerSideProps(context: RequestContext) {
    const { id } = context.query;
    
    const pizzaRepo = new PizzaRepository();
    if (id === undefined) {
        return {
            pizza: null,
        }
    }

    //@ts-ignore
    const pizza = await pizzaRepo.findById(id);
    return {
        props: {pizza}, // will be passed to the page component as props
    }
}
const Pizza = ({pizza}: {pizza: null|Pizza}) => {
    if (null === pizza) {
        return <div>Erreur</div>
    }

  return (
    <div className="my-8 container mx-auto">
        <Image src={pizza ? pizza.Image[0].url : ''} alt={pizza ? pizza.Name : ''} width="300" height="170" />
        <h1 className="font-display text-3xl">{pizza.Name}</h1>
        <p className="pt-3">{pizza.Description}</p>
        <p className="pt-3">{pizza.Price} €</p>
    </div>
    )
}

export default Pizza