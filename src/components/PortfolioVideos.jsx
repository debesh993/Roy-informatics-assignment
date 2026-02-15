import video1 from "../assets/thumbnail_image/20220716071647_thumbnail-4.jpg";
import video2 from "../assets/thumbnail_image/20220716071510_thumbnail-3.jpg";
import video3 from "../assets/thumbnail_image/20220716071445_thumbnail-2.jpg";
import video4 from "../assets/thumbnail_image/20220716071306_thumbnail-1.jpg";

const videos = [
  {
    id: 1,
    thumbnail: video1,
    link: "https://www.youtube.com/watch?v=e-oViKyD4so",
  },
  {
    id: 2,
    thumbnail: video2,
    link: "https://www.youtube.com/watch?v=5dK78dSPR88",
  },
  {
    id: 3,
    thumbnail: video3,
    link: "https://www.youtube.com/watch?v=alfys0lWhsE",
  },
  {
    id: 4,
    thumbnail: video4,
    link: "https://www.youtube.com/watch?v=4z_2DkY1QnA",
  },
];

const PortfolioVideos = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#ede0b4] py-16 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#031940] tracking-wide">
            Videos
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-[220px] sm:h-[250px] lg:h-[260px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl transition duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8l6 4-6 4V8z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}

        </div>

        {/* View More Button */}
        <div className="text-center mt-14">
          <a
            href="/video"
            className="
              inline-flex items-center justify-center
              px-8 py-3
              border border-[#031940]
              text-[#031940]
              rounded-full
              text-sm tracking-wide
              transition duration-300
              hover:bg-[#031940] hover:text-white
            "
          >
            View More
          </a>
        </div>

      </div>
    </section>
  );
};

export default PortfolioVideos;
