import Link from "next/link";
import styles from './Posts.module.css'

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts",{
      cache:"no-store"
  });
  const posts = await res.json();
//   console.log(posts);
  return (
    <div className="container px-4 md:px-8 lg:px-16 ">
      <h1  className={styles.header_text}>
        Total Posts : {posts.length} 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <div key={post.id}>
            <div className="card card-compact my-5  bg-gray-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>Likes: {post.likes_count}</p>
                <div className="card-actions justify-end">
                 <Link href={`posts/${post.id}`}>
                 <button className="btn btn-primary">see More</button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostsPage;
