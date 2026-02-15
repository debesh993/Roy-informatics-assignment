import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    id: 1,
    thumbnail: "/admin/thumbnail_image/20220716071647_thumbnail-4.jpg",
    url: "https://www.youtube.com/watch?v=e-oViKyD4so",
  },
  {
    id: 2,
    thumbnail: "/admin/thumbnail_image/20220716071510_thumbnail-3.jpg",
    url: "https://www.youtube.com/watch?v=5dK78dSPR88",
  },
  {
    id: 3,
    thumbnail: "/admin/thumbnail_image/20220716071445_thumbnail-2.jpg",
    url: "https://www.youtube.com/watch?v=alfys0lWhsE",
  },
  {
    id: 4,
    thumbnail: "/admin/thumbnail_image/20220716071306_thumbnail-1.jpg",
    url: "https://www.youtube.com/watch?v=4z_2DkY1QnA",
  },
];

const Videos = () => {
  return (
    <section id="portfolio" className="bg-[#ede0b4] py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Videos
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <FaYoutube className="text-red-600 text-5xl drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-14">
          <a
            href="/video"
            className="
              inline-block
              bg-black
              text-white
              px-8 py-3
              rounded-full
              font-medium
              transition duration-300
              hover:bg-gray-800
              hover:scale-105
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
