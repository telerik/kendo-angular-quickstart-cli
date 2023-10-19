export class Category {
    public text: string = '';
    public value: number | null = 0;
}

export const categories: Category[] = [
    { text: 'Beverages', value: 1 },
    { text: 'Condiments', value: 2 },
    { text: 'Confections', value: 3 },
    { text: 'Dairy Products', value: 4 },
    { text: 'Grains/Cereals', value: 5 },
    { text: 'Meat/Poultry', value: 6 },
    { text: 'Produce', value: 7 },
    { text: 'Seafood', value: 8 }
];
