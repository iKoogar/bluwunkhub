import express, { Request, Response } from 'express';
const app = express();
const PORT = 3000;

// First endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});