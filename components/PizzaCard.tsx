import Image from "next/image";
import Link from "next/link";
import { Image as ModelImage}  from "../lib/Model/Image";
import { Pizza } from "../lib/Model/Pizza";
import Vegan from "./Icons/Vegan";

export default function PizzaCard({pizza}: {pizza: Pizza}) 
{
    //Get the smallest image
    const imageSrc = pizza.Image.sort((a, b) => a.width - b.width)[0];

    const hasAttributeVegan = pizza['Name (from Attributes)']?.includes("Végétarienne");

    return (
        <div className="font-body flex flex-col items-center gap-y-4">
            <Image src={imageSrc.url} alt={"Pizza " + pizza.Name} width={imageSrc.width} height={imageSrc.height} className="max-h-32" loading="lazy" />
            
            <Link href={`/pizzas/${pizza.id}`} className="hover:underline">
                <span className="flex gap-2">{pizza.Name} {hasAttributeVegan && <span title="Végétarienne"><Vegan className='stroke-green-600' width={20} height={20} /></span>}</span>
            </Link>
            <span className="text-center line-clamp-2">{pizza.Description}</span>
            <span>{pizza.Price} €</span>
            <button className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-4 px-6">Ajouter au panier</button>
        </div>
    )
}