import { v4 as uuid } from 'uuid';

export const editRapportFileName = (req, file, callback) => {
  const randomName = uuid();
  callback(null, randomName);
};
