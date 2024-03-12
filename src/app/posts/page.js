const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  console.log(posts);
  return (
    <div>
      <h1 className="text-3xl text-center p-2">
        {" "}
        Total Post : {posts.length}{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post) => (
          <div key={post.id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
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