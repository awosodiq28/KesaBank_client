import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async () => {
  console.log('working');
  try {
    const user = await prisma.user.findMany({
      include: {
        verification: true,
        transactions: true
      }
    });
    // Filter password_hash
    const list: any = [];
    return new NextResponse(JSON.stringify(user), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'User not found' }),
      { status: 500 }
    );
  }
};
