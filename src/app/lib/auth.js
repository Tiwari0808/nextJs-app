import { jwtVerify, SignJWT } from "jose";

const secretKey = new TextEncoder.encode("abcde");

const signIn = async (payload) => {
  return await SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secretKey);
};

const verifyToken = async (token) => {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    return null;
  }
};
