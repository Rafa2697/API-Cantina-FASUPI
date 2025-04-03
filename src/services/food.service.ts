import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface FoodData {
    id: string;
    name: string;
    description: string;
    price: number;
    imagemURL: string;
    categoryId: string;
    isAvailable: boolean;
  }

export const getAllFoods = async () => {
    return await prisma.menuItem.findMany({
        orderBy:{
            createdAt:'asc'
        },
        include:{
            category:true
        }
    })
}

export async function addFood(name:string, description:string, price:number, imagemURL:string, categoryId:string, isAvailable:boolean) {
    try{
        return await prisma.menuItem.create({
            data:{
                name,
                description,
                price,
                imagemURL,
                categoryId,
                isAvailable
            }
        })

    }catch(error){
        console.error(error);
    }
}

export async function deleteFood( id:string) {
    try{
       
        return await prisma.menuItem.delete({
            where:{
                id
            }
        })

    
    }catch( error){
        console.error(error)
    }
    
}


export async function updateFood({ id, name, description, price, imagemURL, categoryId, isAvailable }: FoodData) {
    try{

        return await prisma.menuItem.update({
            where: {
                id
            },
            data:{
                name,
                description,
                price,
                imagemURL,
                categoryId,
                isAvailable
            }
        });
    } catch(error){
        console.error(error)
    }
}