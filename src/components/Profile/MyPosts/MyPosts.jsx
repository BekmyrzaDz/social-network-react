import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="How are you?" like={6} />
        <Post message="Hi my friends&" like={9} />
      </div>
    </div>
  );
};

export default MyPosts;
