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

    // user.forEach((el: Partial<(typeof user)[0]>) => {
    //   delete el.password_hash;
    //   el.account_no! += 1002784563;
    //   console.log(
    //     '🚀 ~ file: usersController.js:26 ~ user.forEach ~ el.account_bal:',
    //     el.account_bal
    //   );
    //   list.push(el);
    // });
    // console.log(
    //   '🚀 ~ file: usersController.js:30 ~ user.forEach ~ el.password_hash:',
    //   list
    // );
    return new NextResponse(JSON.stringify(user), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'User not found' }),
      { status: 500 }
    );
  }
};
