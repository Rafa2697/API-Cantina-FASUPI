import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface Category {
    id: string;
    name: string;
}

export async function getAllCategories() {
    try{
        return await prisma.category.findMany()
    }catch(error){
        console.error(error);
    }

}

export async function addCategory(name:string) {
    try {
        return await prisma.category.create({
            data: {
                name
            }
        })
    } catch (error) {
        console.error(error);
    }
}
