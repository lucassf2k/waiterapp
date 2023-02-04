import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required!' });
    }

    if (!icon) {
      return res.status(400).json({ error: 'Icon is required!' });
    }

    const category = await Category.create({ name, icon });

    return res.json(category);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
