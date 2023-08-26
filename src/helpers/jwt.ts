import { verify } from 'jsonwebtoken';

export function verifyJWT(toks: string) {
  return verify(toks, process.env.JWT_SECRET!);
}
