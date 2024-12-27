import { PrismaClient } from "@prisma/client";

const prismaSingletonClient =()=>{
    return new PrismaClient();
}

//@ts-ignore
const prisma = globalThis.prisma ?? prismaSingletonClient();

// @ts-ignore
if(process.env.NODE_ENV !== "production")globalThis.prisma = prisma;

export default prisma;