import Image from "next/image";
import { Image as ModelImage}  from "../lib/Model/Image";

export default function PizzaCard({image, name, description, price}: {image: Array<ModelImage>, name: string, description: string, price: number}) 
{
    //Get the smallest image
    const imageSrc = image.sort((a, b) => a.width - b.width)[0];

    return (
        <div className="font-body flex flex-col items-center gap-y-4">
            <Image src={imageSrc.url} alt={"Pizza " + name} width={imageSrc.width} height={imageSrc.height} className="max-h-32" loading="lazy" />
            <span>{name}</span>
            <span className="text-center line-clamp-2">{description}</span>
            <span>{price} €</span>
            <button className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-4 px-6">Ajouter au panier</button>
        </div>
    )
}