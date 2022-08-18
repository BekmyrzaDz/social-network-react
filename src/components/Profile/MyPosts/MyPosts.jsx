import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const postsData = [
  { id: 1, message: "How are you?", likesCount: 12 },
  { id: 2, message: "Hi my friends!", likesCount: 11 },
];

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
      <div className={s.posts}>
        <Post message={postsData[0].message} like={postsData[0].likesCount} />
        <Post message={postsData[1].message} like={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
