import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { Configuration, Images } from './types/Configuration';

dotenv.config();
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const authorization = `Bearer ${TMDB_API_KEY}`;

const app = express();
const port = 4000;
const baseUrl = 'https://api.themoviedb.org/3';
const baseHeaders = { Authorization: authorization };
let images: Images;
let changeKeys: string[];
getConfiguration().then((config) => {
  images = config.images;
  changeKeys = config.change_keys;
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from kino');
});

app.get('/movies/', async (req, res) => {
  console.log('Got movies request');
  const url = `${baseUrl}/discover/movie`;

  const response = await axios.get(url, {
    params: {
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
      with_watch_monetization_types: 'flatrate',
    },
    headers: baseHeaders,
  });

  res.send(response.data);
});

app.get('/imagesConfig', (req, res) => {
  res.send(images);
});

// app.get('/poster/:size/:id', async (req, res) => {
//   const imageBaseUrl = images.base_url;
//   const size = Number(req.params.size);
//   const posterSize = images.poster_sizes[size];
//   console.log(`${imageBaseUrl}${posterSize}/${req.params.id}`);

//   const response = await axios.get(
//     `${imageBaseUrl}${posterSize}/${req.params.id}`,
//     {
//       headers: baseHeaders,
//     }
//   );

//   return response.data;
// });

app.listen(port, () => {
  console.log(`App listening at localhost:${port}`);
});

async function getConfiguration(): Promise<Configuration> {
  const response = await axios.get(`${baseUrl}/configuration`, {
    headers: baseHeaders,
  });

  return response.data;
}
