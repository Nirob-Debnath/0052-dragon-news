import { useState } from "react";
import { FaRegEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card bg-base-100 shadow-md p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold">{author?.name}</p>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author?.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-lg">
                    <FaRegBookmark className="hover:text-primary cursor-pointer" />
                    <FaShareAlt className="hover:text-primary cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="font-bold text-lg mb-3">{title}</h2>

            {/* Image */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt="News"
                    className="w-full h-48 object-cover rounded-md"
                />
            </figure>

            {/* Details */}
            <p className="text-gray-700 my-3">
                {isExpanded ? details : `${details.slice(0, 150)}...`}
                <span
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 font-medium ml-2 cursor-pointer"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1 text-orange-500">
                    {Array.from({ length: rating.number }, (_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-600 font-medium ml-2">{rating.number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FaRegEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;