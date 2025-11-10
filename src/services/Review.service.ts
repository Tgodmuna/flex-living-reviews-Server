import path from 'path';
import type { NormalizedReview, RawReview } from '../../types';
import fs from 'fs';

class ReviewService {
  private dataPath: string;
  //   private readonly dataSource = process.env.dataSource || 'mock';

  constructor() {
    this.dataPath = path.join(__dirname, '../data/mockReviews.json');
  }

  public getNormalizedReviews(): NormalizedReview[] | undefined {
    try {
      const file = fs.readFileSync(this.dataPath, 'utf-8');
      const jsonData = JSON.parse(file);

      if (!jsonData || !jsonData.result) {
        throw new Error('Invalid JSON structure');
      }

      const reviews: RawReview[] = jsonData.result;
      if (!reviews) {
        throw new Error('No reviews in data source');
      }

      return reviews.map(r => ({
        listing: r.listingName,
        guestName: r.guestName,
        averageRating:
          r.reviewCategory.reduce((a, c) => a + c.rating, 0) /
          r.reviewCategory.length,
        categories: Object.fromEntries(
          r.reviewCategory.map(c => [c.category, c.rating])
        ),
        review: r.publicReview,
        date: r.submittedAt.split(' ')[0] as string,
        channel: r.channel || 'Hostaway',
      }));
    } catch (error: any) {
      console.error(error.message);
    }
  }

  //   public fetchFromDBandNormalize(): NormalizedReview[] | undefined {}
}

export default ReviewService;
