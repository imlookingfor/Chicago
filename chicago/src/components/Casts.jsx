export default function Casts(props) {
  return(
    <li>
      <img src={props.image} alt="" />     
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </li>
  )
}