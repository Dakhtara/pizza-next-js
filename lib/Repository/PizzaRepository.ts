import Airtable from "airtable";
import {Pizza} from "../Model/Pizza";

export default class PizzaRepository
{
    menuId: string = "tbl89B1OM6YU3kDEs";

    async findAll(): Promise<Array<Pizza>> {
        const base = Airtable.base('app5UijqPM7BKyqS5')

        // @ts-ignore
        let pizzas: Array<any> = []
        const results = await base('Menu').select({
            view: "Grid view"
        })

        // @ts-ignore
        pizzas = await results.all()

        return pizzas.map((pizza: any) => this.formatPizza(pizza));
    }

    async find4Random(): Promise<Array<Pizza>> {
    
        const base = Airtable.base('app5UijqPM7BKyqS5')

        // @ts-ignore
        let pizzas: Array<any> = []
        const results = await base('Menu').select({
            view: "Grid view",
            maxRecords: 4
        })
        
        // @ts-ignore
        pizzas = await results.all()
        
        return pizzas.map((pizza: any) => this.formatPizza(pizza));
    }

    async findById(id: string): Promise<Pizza|null> {
        const base = Airtable.base('app5UijqPM7BKyqS5')

        // @ts-ignore
        let pizza: Record<any, Pizza> = []
        const results = await base('Menu').find(id)

        // @ts-ignore
        pizza = await results
        if (pizza) {
            return this.formatPizza(pizza);
        }
        return null;
    }

    formatPizza(pizza: Record<any, any>): Pizza {
        return {
            id: pizza.id,
            Name: pizza.fields.Name,
            Description: pizza.fields.Description,
            Price: pizza.fields.Price,
            slug: pizza.fields.slug,
            Image: pizza.fields.Image,
            'Name (from Attributes)': pizza.fields['Name (from Attributes)'] ?? null
        }
    }
}
