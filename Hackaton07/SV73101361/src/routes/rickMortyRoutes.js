import express from 'express';
import { getCharacters, getCharacterDetails } from '../controllers/rickMortyController.js';

const router = express.Router();

router.get('/', getCharacters);
router.get('/:id', getCharacterDetails);

export default router;
