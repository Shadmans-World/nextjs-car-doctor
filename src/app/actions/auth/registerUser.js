"use server";
import bcrypt from "bcrypt"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  // console.log(payload)
  const { name, email, password } = payload;
  const usersCollection = dbConnect(collectionNameObj.usersCollection);

  if (!email || !password) {
    return {success : false};
  }

  const user = await usersCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password,10);
    payload.password = hashedPassword;
    const result = await usersCollection.insertOne(payload);
    const {acknowledged,insertedId} = result;
    return {acknowledged, insertedId: insertedId.toString()}
  }
  return {success : false};
};
