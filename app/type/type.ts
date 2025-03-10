export type CategoryType = 'Fruit' | 'Vegetable';
export interface ProductType {
    type: CategoryType;
    name: string;
}

export interface MenuType {
    name: string;
    href: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    hair: {
        color: string;
    };
    address: {
        postalCode: string;
    };
    company: {
        department: string;
    };
}

export interface DepartmentStats {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, string>;
}

