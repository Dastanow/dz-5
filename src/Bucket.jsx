import { useContext } from "react"
import { KorzC } from "./App"
import IceCream from "./images/images.jpg";
import Fantd from "./images/otnyud-ne-bmw-top-10-samykh-dorogikh-mashin-mira-v-2022-godu-3-min.jpg";
import Cola from "./images/movit.jpg";

const Bucket = ({bucket}) =>{ 
    const props = useContext(KorzC)
    return( 
        <> 
             Корзина: 
    <div> 
        {props.bucket.map((item,index) => <div key={index}> 
          {/* {item.img} */}
          {item.title}
          {item.subtitle}
        </div>)}
    </div>
        </>
    )
} 
export default Bucket
