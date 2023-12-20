import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;
const api_key: string = 'OowQn7i01lyJLVIdaqXP1b0OkVKRT5kO';

app.use(cors());



app.get('/bestSeller', async (req: Request, res: Response) => {
  try {
    const { date } = req.query;


    if (!date) {
      return res.status(400).json({ error: 'Missing date parameter.' });
    }

    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=${date}&api-key=${api_key}`);
    const responseData = await response.json();
    
    res.json(responseData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




