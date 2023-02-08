export type NewClient = {
    client:{
        name: string;
        email: string;
        phone: string;
        address: string;
        cep: string;
        city: string;
        state: string;
        number: string;
    }
    project:{
        description: string;
        department: string;
        responsible: string;
    }
};