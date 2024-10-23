import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  ml-4 mt-1 pt-4">
            <div className="mb-5 text-center text-purple-600">
                <h3 className="text-3xl bg-purple-100 px-3 py-3">Reading Time: {readingTime}</h3>
            </div>
            <div className="bg-slate-100">
                <h2 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
