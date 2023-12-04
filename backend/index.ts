import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;


const api_key = 'OowQn7i01lyJLVIdaqXP1b0OkVKRT5kO';

app.get(`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${api_key}`, (req: Request, res: Response) => {
  console.log(res.json());
})


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  





// Search by Author
// Search by book Title 
// Search by isbn 

// Get Best Seller 
// Get Best Seller by year