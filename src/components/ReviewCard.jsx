import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="ml-3">
            <p className="font-medium">{review.userName}</p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="mt-2 text-gray-600">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;