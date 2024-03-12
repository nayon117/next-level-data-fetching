import Link from "next/link";

const DetailPage = async ({params}) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await res.json();
    // console.log(post);
    return(
        <div>
             <p> Welcome to post details page </p>
             <div key={post.id}>
            <div className="card card-compact my-5 w-[70%] bg-gray-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>Likes: {post.likes_count}</p>
                <div className="card-actions justify-end">
                 <Link href="/posts">
                 <button className="btn btn-primary">Back</button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default DetailPage;