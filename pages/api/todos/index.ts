import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";
type Todo = {
  title: string;
};

const todos: Todo[] = [
  { title: "読書" },
  { title: "プログラミング" },
  { title: "散歩" },
  { title: "nextjs" }
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  res.status(200).json(todos);
};