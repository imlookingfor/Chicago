export default function Directors(props) {
  return(
    <li>
      <img src={props.image} alt="" />     
      <h3>{props.name}</h3>
      <h4>{props.role}</h4>
    </li>
  )
}