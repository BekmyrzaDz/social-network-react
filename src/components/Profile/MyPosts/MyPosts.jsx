import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const posts = [
  { id: 1, message: "How are you?", likesCount: 12 },
  { id: 2, message: "Hi my friends!", likesCount: 11 },
];

const postsElements = posts.map((p) => (
  <Post message={p.message} like={p.likesCount} />
));

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
