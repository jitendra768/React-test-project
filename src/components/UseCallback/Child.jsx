import React,{memo} from 'react'

const Child = ({learning}) => {
    console.log('i am child')
  return (
    <div>Child</div>
  )
}

export default memo(Child);