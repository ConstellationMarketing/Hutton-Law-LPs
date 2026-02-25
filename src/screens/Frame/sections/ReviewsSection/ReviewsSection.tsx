import React from "react";

const reviews = [
  {
    name: "Blake F.",
    text: "Professional service with great response! I would recommend Hutton Tax Solutions to anyone before other big shops that I've worked with in the past. Thanks Kristin!",
    stars: 5,
  },
  {
    name: "Kristin B.",
    text: "Kristin and Justin were amazing, they were very responsive and informative on our tax issue and were able to resolve our issue in far less time than expected...highly recommend you give them a call.",
    stars: 5,
  },
  {
    name: "Terry Z.",
    text: "An Exceptional Federal/IRS tax resolution law firm...very high integrity...exceeded my expectations, and produced the needed results much faster than I had anticipated.",
    stars: 5,
  },
  {
    name: "Chris M.",
    text: "Kristen was on top of it and got all that we need done before the deadline. I can say I will definitely use Hutton Tax Solutions again whenever I need them.",
    stars: 5,
  },
  {
    name: "Jennifer L.",
    text: "From my first contact...I felt relief and confidence that my tax issues could be resolved with their expertise. They answered every question and offered valuable advice...I am extremely satisfied.",
    stars: 5,
  },
  {
    name: "Susan B.",
    text: "I highly recommend them! They kept us updated on every step. Every thing was explained really well.",
    stars: 5,
  },
];

export const ReviewsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-wosnik-light py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-10">
          Client Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm flex flex-col"
            >
              <span className="text-wosnik-accent font-heading text-5xl leading-none mb-4">&ldquo;</span>
              <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 mb-8">
                {review.text}
              </p>
              <div className="flex mb-3">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-gray-500 text-sm">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
