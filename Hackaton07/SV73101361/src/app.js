import express from 'express';
import dotenv from 'dotenv';
import githubRoutes from './routes/githubRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';
//import exchangeRateRoutes from './routes/exchangeRateController.js';
import pokemonRoutes from './routes/pokemonRoutes.js';
import rickMortyRoutes from './routes/rickMortyRoutes.js';
import cocktailRoutes from './routes/cocktailRoutes.js';
import storeRoutes from './routes/storeRoutes.js';
import unsplashRoutes from './routes/unsplashRoutes.js';
import quotesRoutes from './routes/quotesRoutes.js';
import randomUserRoutes from './routes/randomUserRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import marsRoutes from './routes/marsRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/github', githubRoutes);
app.use('/api/weather', weatherRoutes);
//app.use('/api/exchange-rate', exchangeRateRoutes);
app.use('/api/pokemon', pokemonRoutes);
app.use('/api/rick-morty', rickMortyRoutes);
app.use('/api/cocktails', cocktailRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/unsplash', unsplashRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/random-user', randomUserRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/mars', marsRoutes);

export default app;
