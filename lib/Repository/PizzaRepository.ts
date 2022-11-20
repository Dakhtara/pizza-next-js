import Airtable from "airtable";
import {Pizza} from "../Model/Pizza";

export default class PizzaRepository
{
    menuId: string = "tbl89B1OM6YU3kDEs";

    async findAll(): Promise<Record<any, Pizza>> {
        const base = Airtable.base('app5UijqPM7BKyqS5')

        // @ts-ignore
        let pizzas: Record<any, Pizza> = []
        const results = await base('Menu').select({
            view: "Grid view"
        })

        // @ts-ignore
        pizzas = await results.all()

        return pizzas;
    }

    async find4Random(): Promise<Record<any, Pizza>> {
    
        const base = Airtable.base('app5UijqPM7BKyqS5')

        // @ts-ignore
        let pizzas: Record<any, Pizza> = []
        const results = await base('Menu').select({
            view: "Grid view",
            maxRecords: 4
        })
        

        // @ts-ignore
        pizzas = await results.all()

        return pizzas;
    }
}
