import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Products from "./Products";
import Bucket from "./Bucket";

import IceCream from "./images/images.jpg";
import Fantd from "./images/otnyud-ne-bmw-top-10-samykh-dorogikh-mashin-mira-v-2022-godu-3-min.jpg";
import Cola from "./images/movit.jpg";

const data = [
  {
    title: "Машина будущего",
    img: IceCream,
    subtitle: "$20000",
    id: 1,
  },
  {
    title: "Бугати",
    img: Fantd,
    subtitle: "$15000",
    id: 2,
  },
  { title: "Гелик",
   img: Cola, 
   subtitle: "$18000",
    id: 3 },
];
export const KorzC = createContext(null);
function App() {
  const [products, setProducts] = useState(data);
  const [bucket, setBucket] = useState([]);
  const onHandleAddBucket = (e) => {
    setBucket([...bucket, e]);
  };
  console.log(products, bucket);
  return (
    <KorzC.Provider value={{ products, bucket, onHandleAddBucket }}>
      <div className="App">
        <Link to={"/bucket"}>Lll</Link>
        <Routes>
          <Route path="/*" element={<Products />} />
          <Route path="/bucket/*" element={<Bucket />} />
        </Routes>
      </div>
    </KorzC.Provider>
  );
}

export default App;
