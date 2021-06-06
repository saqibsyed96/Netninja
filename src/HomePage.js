import BlogList from './BlogList';
import useFetch from './useFetch';

const HomePage = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/Blogss'); 
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === "Syed" )} title="Syed Blogs" /> */}
        </div>
     );
}
 
export default HomePage
