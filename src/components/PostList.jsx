import Post from './Post';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostList() {
    const posts = useLoaderData();       

    return (
        <>            
            <div>          
                {posts.length > 0 &&(
                    <ul className={classes.posts}> 
                        {posts.map((post) => <Post key={post.id} id={ post.id} author={post.author} body={post.body}></Post>)}
                    </ul>            
                )}
                {posts.length === 0 && (
                    <div style={{textAlign:"center", color: "white"}}>
                        <h2> There is no posts yet!</h2>
                        <p> Start adding some!</p>
                    </div>
                )}               
            </div>
        </>
    );
}

export default PostList;