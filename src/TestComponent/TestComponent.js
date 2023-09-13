import iPhone0 from "../images/iPhone0.jpg";
import iPhone1 from "../images/iPhone1.jpg";
import iPhone2 from "../images/iPhone2.jpg";
import iPhone3 from "../images/iPhone3.jpg";
import iPhone4 from "../images/iPhone4.jpg";
import iPhone5 from "../images/iPhone5.jpg";
import "./TestComponent.css";

const TestComponent = () => {
  return (
    <>
      <div class="card">
        <span style={{ "--i": "0" }}></span>
        <img src={iPhone0} />
        <span style={{ "--i": "1" }}></span>
        <img src={iPhone1} />
        <span style={{ "--i": "2" }}></span>
        <img src={iPhone2} />
        <span style={{ "--i": "3" }}></span>
        <img src={iPhone3} />
        <span style={{ "--i": "4" }}></span>
        <img src={iPhone4} />
        <span style={{ "--i": "5" }}></span>
        <img src={iPhone5} />
      </div>
    </>
  );
};

export default TestComponent;
