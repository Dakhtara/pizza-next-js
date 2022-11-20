export default function HeroHome() {
  return (
    <div className="font-display uppercase text-white bg-cust-orange rounded-3xl p-9">
      <div className="flex gap-6">
        <div className="tracking-wider">
          <h1 className="text-5xl mb-8">Bienvenue chez PIZZA WEST</h1>
          <p className="text-3xl">
            Depuis 7 ans nous vous proposons des pizzas à emporter et en
            livraison sur Les Sables d'Olonne et sur Olonne sur mer.
          </p>
        </div>
        <img src="/hero_1.png" alt="Pizza" />
        <img src="/hero_2.png" alt="Pizza" />
      </div>
    </div>
  )
}
