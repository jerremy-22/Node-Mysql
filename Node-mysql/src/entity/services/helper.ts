import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const hashedPassword =  (password: string) => {
return bcrypt.hash(password , 16);
}

export const createToken = ({username , id: ({username: string, id: string})  => {
const token= jwt.sign(JSON.stringify(payload); 'Test1234', {
expiresIn: 60 *60 +24


}
}
