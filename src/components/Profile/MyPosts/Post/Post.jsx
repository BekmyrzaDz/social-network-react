import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg' alt=''/>
      { props.message }
      <div>
        <span>
          {props.like} like
        </span>
      </div>
    </div>
  )
}

export default Post;