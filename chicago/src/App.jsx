import { useState } from "react";
import { Velmas, Roxies, Billys, Mamas, Marys, Amos, Ensembles, DIRECTORS } from "./data";
import { SCHEDULE } from "./data";

import Header from "./components/Header";
import Synopsis from "./components/Synopsis";
import Casts from "./components/Casts"
import Directors from "./components/Directors";
import Reservation from "./components/Reservation";
import Location from "./components/Location";


function App() {

  const [ selectedDate, setSelectedDate ] = useState("firstDay");
  console.log("selectedDate:::" + selectedDate);

  return (
    <div>
      <Header/>  
      <main>
        <h1>Synopsis</h1>
        <section id="synopsis">
          <Synopsis/>
        </section>

        <h1>Cast</h1>
        <section id="casts">
          <h2>벨마 켈리</h2>
          <ul>
            <Casts {...Velmas[0]}/>
            <Casts {...Velmas[1]}/>
            <Casts {...Velmas[2]}/>
          </ul>
          <h2>록시 하트</h2>
          <ul>
            <Casts {...Roxies[0]}/>
            <Casts {...Roxies[1]}/>
            <Casts {...Roxies[2]}/>
          </ul>
          <h2>빌리 플린</h2>
          <ul>
            <Casts {...Billys[0]}/>
            <Casts {...Billys[1]}/>
            <Casts {...Billys[2]}/>
          </ul>
          <h2>마마 모튼</h2>
          <ul>
            <Casts {...Mamas[0]}/>
            <Casts {...Mamas[1]}/>
          </ul>
          <h2>에이모스 하트</h2>
          <ul>
            <Casts {...Amos[0]}/>
            <Casts {...Amos[1]}/>
          </ul>
          <h2>메리 선샤인</h2>
          <ul>
            <Casts {...Marys[0]}/>
            <Casts {...Marys[1]}/>
          </ul>
          <h2>앙상블</h2>
          <ul>
            <Casts {...Ensembles[0]}/>
            <Casts {...Ensembles[1]}/>
            <Casts {...Ensembles[2]}/>
            <Casts {...Ensembles[3]}/>
          </ul>          
        </section>

        <h1>Directors</h1>
        <section id="casts">
          <h2>연출진</h2>
            <ul>
              <Directors {...DIRECTORS[0]}/>
              <Directors {...DIRECTORS[1]}/>
              <Directors {...DIRECTORS[2]}/>
              <Directors {...DIRECTORS[3]}/>
            </ul>   
        </section>

        <h1>Reservation</h1>
        <section id="reservation">
          <Reservation/>
        </section>

        <h1>Schedule</h1>
        <section id="schedule">
          <menu id="dateBtn">
            <ul>
              <li><button onClick={() => setSelectedDate("firstDay")}>4월 19일</button></li>
              <li><button onClick={() => setSelectedDate("secondDay")}>4월 20일</button></li>
            </ul>
          </menu>
        
          <h2>{SCHEDULE[selectedDate].date}</h2>
          <p>{SCHEDULE[selectedDate].table}</p>
        </section>

        <h1>Location</h1>
        <section id="information">
          <Location/>
        </section>

        <h1>Introduce</h1>
        <section id="amuse-intro">
          <div>
            <h2>어뮤즈 AMUSE</h2>
            <p>미소 짓게 하다 라는 뜻을 가지고 있는 일반인 취미 뮤지컬 단체입니다. 실제로 어뮤즈를 발음해 보시면 미소를 짓게 됩니다. 많관부.</p>
            <p>인스타 아이디 이거구요 소모임으로 가입하시고 궁금한점은 어디어디로 문의하세요</p>
          </div>
        </section>
        <div id="hidden-div"></div>
        <div id="hidden-div"></div>

      </main>
    </div>
  );
}

export default App;
