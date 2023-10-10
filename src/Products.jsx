import { useContext } from "react";
import { KorzC } from "./App";
import './Product/product.css'

const Products = () => {
  const theme = useContext(KorzC);
  return (
    <div>
      {theme.products.map((item, index) => (
        <div onClick={() => theme.onHandleAddBucket(item)} key={index}>
          {/* <div>{item.src}</div> */}
          <div className="prod"> 
            <img src={item.img} />
          <h1>{item.title}</h1>
          <h3>{item.subtitle}</h3>
          </div>
         
        </div>
      ))}
    </div>
  );
};
export default Products;
