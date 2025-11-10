import express from 'express';
import { ReviewController } from '../controllers/ReviewController';

const router = express.Router();
const reviewController = new ReviewController();

router.get('/hostaway', reviewController.getMockReviews);

// REAL API EXAMPLE (not required, just for README)
router.get('/hostaway/live', async (_, res) => {
  try {
    const response = await fetch(
      'https://api.hostaway.com/v1/reviews?accountId=61148',
      {
        headers: {
          Authorization:
            `Bearer ${process.env.HOSTAWAY_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    res.json(data);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Live Hostaway API request failed' });
  }
});

const reviewRouter = router;
export default reviewRouter;
