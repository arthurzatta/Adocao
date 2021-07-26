import { createContext } from 'react';
import { PetType } from '../types';
import { animals } from '../../mockups/data';

const initialState: PetType = {
    name: '',
    description: '',
    gender: '',
    status: {
        vacinado: false,
        vermifugado: false,
        castrado: false,
        chipado: false
    },
    userId: 0,
};

//definindo o tipo do context ele força que o provider forneça dados referentes ao mesmo
export const PetsContext = createContext<any>(initialState);

export function PetsState(): any {
    
    function createPet(pet: PetType): void {
        animals.push(pet);
    }

    return (
        <PetsContext.Provider value={{
            animals,
            createPet
        }}>

        </PetsContext.Provider>
    );
}