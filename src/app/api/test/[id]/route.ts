import { NextResponse } from 'next/server';

const getUser = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const account_no = { parar: +params.id, env: process.env.JWT_SECRET };
  try {
    return new NextResponse(JSON.stringify(account_no), { status: 201 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'User not found' }),
      { status: 500 }
    );
  }
};

export { getUser as GET };
