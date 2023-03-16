import express from 'express';
import LicenseeRepository from '../repositories/LicenseeRepository';
import Licensee from '../models/Licensee';

const LicenseesRouter = express.Router();

LicenseesRouter.get<Licensee[]>('/licensees', (req, res) => {
  LicenseeRepository.getAll()
  .then((licensees) => res.status(200).send(licensees))
  .catch((error) => res.status(400).send(error.toString()));
})

LicenseesRouter.get<Licensee>('/licensees/:id', (req, res) => {
  if (req.params.id) {
    LicenseeRepository.get(+req.params.id)
    .then((licensee) => res.status(200).json(licensee))
    .catch((error) => res.status(404).end());
  } else {
    res.status(400).end();
  }
})

LicenseesRouter.post<Licensee>('/licensees', (req, res) => {
  const licensee = req.body;
  LicenseeRepository.post(licensee)
  .then((id) => res.status(201).header('Location', `/licensees/${id}`).end())
  .catch((error) => res.status(400).end());
})

export default LicenseesRouter;