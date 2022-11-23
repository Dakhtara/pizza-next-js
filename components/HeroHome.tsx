import Image from "next/image";

export default function HeroHome() {
  return (
    <div className="font-display uppercase text-white bg-cust-orange rounded-3xl p-9">
      <div className="md:flex gap-6">
        <div className="md:w-6/12 tracking-wider">
          <h1 className="text-3xl md:text-5xl mb-8">Bienvenue chez PIZZA WEST</h1>
          <p className="text-xl md:text-3xl">
            Depuis 7 ans nous vous proposons des pizzas à emporter et en
            livraison sur Les Sables d&apos;Olonne et sur Olonne sur mer.
          </p>
        </div>
        <div className="hidden md:block">
        <Image src="/hero_1.png" width="255" height="478" alt="Pizza" />

        </div>
        <div className="hidden md:block">
        <Image src="/hero_2.png" width="409"   height="478" alt="Pizza" />
        </div>
      </div>
    </div>
  )
}
