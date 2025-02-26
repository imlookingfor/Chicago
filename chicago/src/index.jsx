//앱 구성요소를 from 에서 가져옴 리액트 라이브러리를 모두 가져옴
import ReactDOM from "react-dom/client"; 

//import {App} from "./App.jsx";
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App/>);
