import sqlite3 from 'sqlite3';
import LicenseeRepository from './LicenseeRepository';

const DBSOURCE = 'db.sqlite';

const database = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) {
		console.error(err.message);
		throw err;
	} else {
		console.log('Database successfully connected.');
		database.run(LicenseeRepository.createTableSql, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
      } else {
				console.log(`'${LicenseeRepository.tableName}' table successfully created.`);
      }
    });
	}
})

export default database;