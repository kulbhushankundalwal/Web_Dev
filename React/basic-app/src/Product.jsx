import "./Product.css";
import Price from "./Price.jsx"


function Product({title, idx}) {
  let oldPrice = ["5,999", "17,999", "7,999", "15,499"]
  let newPrice = ["4,999", "15,499", "2,999", "12,999"]
  let desciption = [["32,000 DPI", "Compact Size"], ["FHD Supported", "Android 12"], ["468x468 Res", "24x7 HR"], ["108MP Camera", "67W Fast Charging"]]
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{desciption[idx][0]}</p>
      <p>{desciption[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  );
}
export default Product;
