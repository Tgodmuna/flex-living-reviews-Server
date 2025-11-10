export interface ReviewCategory {
  category: string;
  rating: number;
}

export interface RawReview {
  id: number;
  guestName: string;
  listingName: string;
  publicReview: string;
  rating: number | null;
  reviewCategory: ReviewCategory[];
  submittedAt: string;
  channel?: string;
}

export interface NormalizedReview {
  listing: string;
  guestName: string;
  averageRating: number;
  categories: Record<string, number>;
  review: string;
  date: string;
  channel: string;
}
