import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover,author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-gray-600">{posted_date}</p>
                    </div>
                </div>
                <div className="text-gray-500">
                    <span>{reading_time}min read</span>
                    <button
                    onClick = {() => handleAddToBookmark(blog)} 
                    className="ml-2 text-2xl"
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4 font-bold">{title}</h2>
            <p className="text-gray-500">
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead (reading_time)}
               className="text-purple-800 font-bold underline"
               >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;