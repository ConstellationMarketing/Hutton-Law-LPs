import React from "react";

const reviews = [
  {
    name: "Susan B.",
    time: "2 months ago",
    text: "I highly recommend them! They kept us updated on every step. Every thing was explained really well.",
    stars: 5,
  },
  {
    name: "Jennifer L.",
    time: "3 months ago",
    text: "From my first contact...I felt relief and confidence that my tax issues could be resolved with their expertise. They answered every question and offered valuable advice...I am extremely satisfied.",
    stars: 5,
  },
  {
    name: "Chris M.",
    time: "4 months ago",
    text: "Kristen was on top of it and got all that we need done before the deadline. I can say I will definitely use Hutton Tax Solutions again whenever I need them.",
    stars: 5,
  },
  {
    name: "Terry Z.",
    time: "5 months ago",
    text: "An Exceptional Federal/IRS tax resolution law firm...very high integrity...exceeded my expectations, and produced the needed results much faster than I had anticipated.",
    stars: 5,
  },
  {
    name: "Kristin B.",
    time: "6 months ago",
    text: "Kristin and Justin were amazing, they were very responsive and informative on our tax issue and were able to resolve our issue in far less time than expected...highly recommend you give them a call.",
    stars: 5,
  },
  {
    name: "Blake F.",
    time: "8 months ago",
    text: "Professional service with great response! I would recommend Hutton Tax Solutions to anyone before other big shops that I've worked with in the past. Thanks Kristin!",
    stars: 5,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const ReviewsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-wosnik-light py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-10">
          Client Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar circle */}
                  <div className="w-10 h-10 rounded-full bg-wosnik-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-inter font-semibold text-base">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-wosnik-dark text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="font-body text-gray-400 text-xs">{review.time}</p>
                    {/* Stars */}
                    <div className="flex mt-1">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Google icon */}
                <GoogleIcon />
              </div>

              {/* Review text */}
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
