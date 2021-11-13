// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: string;
  name: string;
};

const users = [
  {
    id: '123',
    name: 'John Doe',
  },
  {
    id: '59287',
    name: 'Jane Smith',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const userId = req.query.userId;
  if (typeof userId !== 'string') {
    throw new Error('user id must be string');
  }

  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new Error('Could not find user');
  }

  res.status(200).json(user);
}
