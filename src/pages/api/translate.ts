import { NextApiRequest, NextApiResponse } from 'next';
import TranslateService from './services/translate.services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      return res.json(TranslateService());

    default:
      return res.status(405).json({ error: 'Método no permitido' });
  }
}