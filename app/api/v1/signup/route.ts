import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';
import prisma from '@/app/lib/db';
// const prisma = new PrismaClient();
export async function POST (req: NextResponse) {
//req.body

    const data = await req.json();
    await prisma.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })

    return NextResponse.json({ message: "You are Signed Up!" })
}