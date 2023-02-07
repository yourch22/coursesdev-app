import type { NextApiRequest, NextApiResponse } from 'next'
import { getCategories } from '../../../controllers/coursesCupon';
import jwt from "jsonwebtoken";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authorization = req.headers.authorization;
  const key = process.env.DB_API_SECRET_KEY;
  const Email = process.env.DB_API_SECRET_EMAIL;
  const Password = process.env.DB_API_SECRET_PASSWORD;
  if (!authorization) {
    return res.status(401).json({ message: "Authorisation header not found." });
  } else {
    const token = authorization.split(" ")[1];
    const { email, password } = jwt.verify(token, key);
    if ( email === Email && password === Password) {
      try {
        if (req.method === "GET") {
          const data = await getCategories(req, res);
          const response = {
            statusCode: 200,
            headers: {
              'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({
              message: data
            })
          };
          return response;
          // res.header("Access-Control-Allow-Origin", "*");
          // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          // return res.status(200,headers:{'Content-Type': 'application/json'}).json({data});
        }
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }
    } else {
      return res.status(404).json({ message: "Bearer token not found." });
    }
  }
}
