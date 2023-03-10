import type { User } from "./types"
import UserDisplay from "./components/UserDisplay"

function App() {
  const users: User[] = [{
    name: "Nikola Ovcharski",
    messages: [{
      body: 'Hey there!'
    }, {
      body: 'Whats up!'
    }]
  }]

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
      users.map((user, index) => <UserDisplay user={user} key={index}/>)
      }
    </div>
  )
}

export default App
