import Licensee from '../models/Licensee';
import database from './database';

const LicenseeRepository = {
  getAll: () => new Promise<Licensee[]>((resolve, reject) => {
    const sql = 'SELECT * FROM licensees';
		const params: string[] = [];

		database.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Licensee[]);
      }
    });
  }),

  get: (id: number) => new Promise<Licensee>((resolve, reject) => {
    const sql = 'SELECT * FROM licensees WHERE id = ?';
		const params = [`${id}`];
		database.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row as Licensee);
      }
    });
  }),

  post: (licensee: Licensee) => new Promise<number>((resolve, reject) => {
    const sql = 'INSERT INTO licensees (fullName, email) VALUES (?, ?)'
		const params = [licensee.fullName, licensee.email]
		database.run(sql, params, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(this?.lastID);
      }
		})
  }),

  tableName: 'licensees',

  createTableSql: `
    CREATE TABLE licensees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT NOT NULL,
      email TEXT NOT NULL,
      key TEXT
    )
  `,
};

export default LicenseeRepository;