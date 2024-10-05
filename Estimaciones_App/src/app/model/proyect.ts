import { Customer } from "./client";
import { Company } from "./company";
import { Monthly_costs } from "./monthly_costs";

export class Proyect {
    name!: string
    customer!: Customer;
    company!: Company;
    sale_price!: number;
    profit_margin!: number;
    profit!: number;
    total_cost!: number;
    monthly_costs!: Monthly_costs;
    cost_nom_mens!: number
}