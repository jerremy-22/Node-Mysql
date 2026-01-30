import { Request, Response } from "express";
import { User } from "./users.model";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};