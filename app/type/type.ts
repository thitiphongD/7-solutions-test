export type CategoryType = 'Fruit' | 'Vegetable';
export interface ProductType {
    type: CategoryType;
    name: string;
}

export interface MenuType {
    name: string;
    href: string;
}