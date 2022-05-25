export default function CustomList({users}){
    
      return (<ul>{users.map(name => (<li key={name}>{name}</li>))}</ul>)
}