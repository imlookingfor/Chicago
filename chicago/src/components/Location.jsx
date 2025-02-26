import { useState } from "react";
import { LOCATION } from "../data";


export default function Location() {

  return(
    <div>
      <h2>{LOCATION.title}</h2>
      <p>{LOCATION.description}</p>
      <pre>
        <code>
          {LOCATION.code}
        </code>
      </pre>

    </div>

  )

}


