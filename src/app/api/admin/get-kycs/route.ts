import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const PUT = async () => {
  try {
    const kyc = await prisma.verification.findMany();
    return new NextResponse(JSON.stringify(kyc), { status: 201 });
  } catch (err) {
    return new NextResponse(JSON.stringify({ err, message: 'No KYC yet' }), {
      status: 500
    });
  }
};
