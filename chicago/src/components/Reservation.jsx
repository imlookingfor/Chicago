import { RESERVATION } from "../data";


export default function Reservation() {

  return(
    <div>
      <h2>{RESERVATION.title}</h2>
      <button onClick={() => window.open('#')}>예매하러 가기</button>
      <p>{RESERVATION.description}</p>
      <pre>
        <code>
          {RESERVATION.code}
        </code>
      </pre>
    </div>

  )

}


