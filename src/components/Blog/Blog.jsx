import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { title, author, cover, author_img, reading_time, posted_date, hashtags } = blog;
    
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-6'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=' flex items-center '>
                    <span>{reading_time} min read </span>
                    <button className='text-green-950 ml-2 text-xl' onClick={() => handleAddToBookmarks(blog)}> <CiBookmark></CiBookmark> </button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href=''>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline mt-4'>Mark As Read</button>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;