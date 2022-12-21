import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://www.play.cz/wp-content/uploads/2019/04/Ava-Max.jpg' alt={"ava"}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )

}

export default Post;