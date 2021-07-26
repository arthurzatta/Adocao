export type PetType = {
    name: string;
    description: string;
    gender: string;
    status: {
        vacinado: boolean;
        vermifugado: boolean;
        castrado: boolean;
        chipado: boolean;
    },
    userId: number;
};

export type UserType = {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    state: string;
    isOng: boolean;
}