import Avatar from "./components/avatar"
const App = () => {
  const user ={
    name :"Thanh dn",
    role:"student"
  }
  return <>
  <h1>Hello world</h1>
  <h2>{user.name}</h2>
  <Avatar name ={user.name} user={user} showInfor={()=>console.log(user.name)}/>
  </>
}

export default App