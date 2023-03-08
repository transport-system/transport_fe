import React from 'react'
import {  Tooltip, Avatar, Rate } from 'antd';
import { Comment } from '@ant-design/compatible';
function CommentFeedback({feedback}) {
  return (
    <div><Comment
    // actions={actions}
    author={<a>{feedback.name}</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={<div>
    <small><Rate disabled defaultValue={feedback.rating}/></small>
       <p> {feedback.detail}
      </p>
    </div>
  
    }
    // datetime={
    //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    //     <span>{moment().fromNow()}</span>
    //   </Tooltip>
    // }
  /></div>
  )
}

export default CommentFeedback