import express from 'express';
import cors from 'cors';
import LicenseesRouter from '../../routers/LicenseeRouter';

// App Express
const app = express();

app.set('view engine', 'ejs');

app.get('/api', function (req, res): void {
  res.setHeader('Content-Type', 'text/html');
  res.send('Salander API');
})

// Cors
app.use(cors({
	origin: 'https://www.eldes.com'
}))

// Rotas
app.use('/api', LicenseesRouter);

// Resposta padrão para quaisquer outras requisições:
app.use(function (req, res) {
	res.status(404).send();
})

export default app;