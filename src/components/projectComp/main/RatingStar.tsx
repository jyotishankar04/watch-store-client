interface PropTypes {
  reviews: {
    rating: number;
    count: number;
  };
}

const RatingStar: React.FC<PropTypes> = ({ reviews: { rating, count } }) => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-6 gap-6">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-8 h-8 ms-3 ${
                i < rating ? "text-yellow-300" : "text-gray-300"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
        <p className="text-lg font-bold">
          {count <= 0 ? "No reviews" : `${count} reviews`}
        </p>
      </div>
      <div className="flex justify-center">
        <p className="btn bg-yellow-400 "> Make a review </p>
      </div>
    </div>
  );
};

export default RatingStar;
