import { NextResponse } from 'next/server';
import { TestSchema } from '@/helpers/schema';

const mike = async (request: Request) => {
  try {
    const user = TestSchema.parse(await request.json());
    return new NextResponse(JSON.stringify(user), { status: 501 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ err, message: 'User not found' }),
      {
        status: 500
      }
    );
  }
};

export { mike as POST };
