import { Proyect } from "../components/model/proyect";


export const projectExtimation: Proyect = {
    name: "Estimación de Proyectos de Software",
    customer: {
        RUC: '0803587898',
        name: 'ACME',
        surname: ' ',
        address: {
            city: 'Quito',
            principalStreet: 'Salinas',
            secondaryStreet: 'Guayas',
            code: 'N-10',
        },
        requirement: "Crear una aplicación utilizando Angular para calcular el costo total de un proyecto de desarrollo de software.",
        time: "3 meses"
    },
    company: {
        ruc: '0835878720001',
        name: 'Clear Mins',
        address: {
            city: 'Quito',
            principalStreet: 'Juan Pablo Sanz',
            secondaryStreet: 'Iñaquito',
            code: 'N-57',
        },
    },
    sale_price: 21250.67,
    profit_margin: 0.32,
    profit: 6800.21,
    total_cost: 14450.45,
    monthly_costs: {
        office_rent: {
            quantity: 1,
            cost: 450,
            total: 1350
        },
        internet: {
            quantity: 1,
            cost: 45,
            total: 135
        },
        computer_rent: {
            quantity: 8,
            cost: 400,
            total: 1200
        },
        employee: [
            {
                nameRol: "Gerente de Proyect",
                quantity: 1,
                detailsRol: {
                    participation: 20,
                    project_salary_months: 156.05,
                    project_salary_3_months: 468.14,
                }
            }, {
                nameRol: "Líder Técnico",
                quantity: 1,
                detailsRol: {
                    participation: 100,
                    project_salary_months: 780.23,
                    project_salary_3_months: 2340.70,
                }

            }, {
                nameRol: "Desarrolladores",
                quantity: 4,
                detailsRol: {
                    participation: 100,
                    project_salary_months: 2626.33,
                    project_salary_3_months: 7879.09,
                }

            }, {
                nameRol: "Tester",
                quantity: 1,
                detailsRol: {
                    participation: 25,
                    project_salary_months: 164.15,
                    project_salary_3_months: 492.44,
                }

            }, {
                nameRol: "DevOps",
                quantity: 1,
                detailsRol: {
                    participation: 25,
                    project_salary_months: 195.06,
                    project_salary_3_months: 585.18,
                }

            }
        ],
    },
    cost_nom_mens:4816.82
}

