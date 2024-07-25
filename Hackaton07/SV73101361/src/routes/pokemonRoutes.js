import express from 'express';
import { getPokemonList, getPokemonDetails } from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/', getPokemonList);
router.get('/:name', getPokemonDetails);

export default router;
