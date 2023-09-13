import iPhone1 from "../phone/image1.jpg";
import iPhone2 from "../phone/image2.jpg";
import iPhone3 from "../phone/image3.jpg";
import iPhone4 from "../phone/image4.jpg";
import iPhone5 from "../phone/image5.jpg";
import iPhone6 from "../phone/image6.jpg";
import iPhone7 from "../phone/image7.jpg";
import iPhone8 from "../phone/image8.jpg";
import iPhone9 from "../phone/image9.jpg";
import iPhone10 from "../phone/image10.jpg";
import iPhone11 from "../phone/image11.jpg";
import iPhone12 from "../phone/image12.jpg";
import iPhone13 from "../phone/image13.jpg";
import iPhone14 from "../phone/image14.jpg";
import iPhone15 from "../phone/image15.jpg";
import iPhone16 from "../phone/image16.jpg";
import iPhone17 from "../phone/image17.jpg";
import iPhone18 from "../phone/image18.jpg";
import iPhone19 from "../phone/image19.jpg";
import iPhone20 from "../phone/image20.jpg";
import iPhone21 from "../phone/image21.jpg";
import iPhone22 from "../phone/image22.jpg";
import iPhone23 from "../phone/image23.jpg";
import iPhone24 from "../phone/image24.jpg";
import iPhone25 from "../phone/image25.jpg";
import iPhone26 from "../phone/image26.jpg";
import iPhone27 from "../phone/image27.jpg";
import iPhone28 from "../phone/image28.jpg";
import iPhone29 from "../phone/image29.jpg";
import iPhone30 from "../phone/image30.jpg";
import iPhone31 from "../phone/image31.jpg";
import iPhone32 from "../phone/image32.jpg";
import iPhone33 from "../phone/image33.jpg";

const imgCountArr = [
  iPhone1,
  iPhone2,
  iPhone3,
  iPhone4,
  iPhone5,
  iPhone6,
  iPhone7,
  iPhone8,
  iPhone9,
  iPhone10,
  iPhone11,
  iPhone12,
  iPhone13,
  iPhone14,
  iPhone15,
  iPhone16,
  iPhone17,
  iPhone18,
  iPhone19,
  iPhone20,
  iPhone21,
  iPhone22,
  iPhone23,
  iPhone24,
  iPhone25,
  iPhone26,
  iPhone27,
  iPhone28,
  iPhone29,
  iPhone30,
  iPhone31,
  iPhone32,
  iPhone33,
];

const IphoneComponent = () => {
  return (
    <>
      <div className="card">
        {imgCountArr?.map((item, index) => {
          return (
            <>
              <span style={{ "--i": index }}></span>
              <img src={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default IphoneComponent;
