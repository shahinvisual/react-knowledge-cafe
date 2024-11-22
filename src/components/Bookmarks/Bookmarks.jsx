
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log(bookmarks);
  return (
    <div className="md:w-1/3  bg-[rgb(17,17,17,0.08)] ml-4 mt-5 rounded-xl">
            <h3 className="text-2xl border rounded-xl bg-[rgba(71,236,164,0.1)] border-green-400 py-5 px-12 text-center">Reading Time: {readingTime}</h3>
            <h5 className="text-3xl text-center mt-6">Bookmarks:{bookmarks.length}</h5>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks