import React from 'react'

const Avatar = (props) => {
    let {name,user,showInfor}=props
    name = "Dang Ngoc Thanh"
  return <div>
    <h2>{name}</h2>
    <img src="" alt="" />
    <p>student</p>
    <button onClick={showInfor}>show infor</button>
  </div>
  
}

export default Avatar