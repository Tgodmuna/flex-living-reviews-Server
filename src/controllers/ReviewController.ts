import { Request, Response } from 'express';
import ReviewService from '../services/Review.service';

export class ReviewController {
  private reviewService: ReviewService;

  constructor() {
    this.reviewService = new ReviewService();
  }

  public getMockReviews = (_: Request, res: Response): void => {
    try {
      const reviews = this.reviewService.getNormalizedReviews();
      if (!reviews) {
        res.status(404).json({ error: `No reviews found: ${reviews}` });
        return;
      }

      res.status(200).json({ status: 'success', reviews });
      return;
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ error: 'Failed to load reviews' });
    }
  };
}
