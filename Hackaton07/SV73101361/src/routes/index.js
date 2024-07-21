import express from 'express';
import githubRoutes from './githubRoutes.js';
import weatherRoutes from './weatherRoutes.js';
import exchangeRateRoutes from './exchangeRateRoutes.js';
import pokemonRoutes from './pokemonRoutes.js';
import rickMortyRoutes from './rickMortyRoutes.js';
import cocktailRoutes from './cocktailRoutes.js';
import storeRoutes from './storeRoutes.js';
import unsplashRoutes from './unsplashRoutes.js';
import quotesRoutes from './quotesRoutes.js';
import randomUserRoutes from './randomUserRoutes.js';
import movieRoutes from './movieRoutes.js';
import marsRoutes from './marsRoutes.js';

const router = express.Router();

router.use('/github', githubRoutes);
router.use('/weather', weatherRoutes);
router.use('/exchange-rate', exchangeRateRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/rick-morty', rickMortyRoutes);
router.use('/cocktails', cocktailRoutes);
router.use('/store', storeRoutes);
router.use('/unsplash', unsplashRoutes);
router.use('/quotes', quotesRoutes);
router.use('/random-user', randomUserRoutes);
router.use('/movies', movieRoutes);
router.use('/mars', marsRoutes);

export default router;
