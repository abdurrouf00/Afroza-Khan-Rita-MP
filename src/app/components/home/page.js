
import Carousel from "./carousel";
import Navber from "@/components/navbar/index";

import Contact from "@/components/contact/index";
import Footer from "@/components/footer";



export default function HomePage (){
    return(
        <div>
        <Navber/>
            <Carousel/>
            <Contact/>
            <Footer/>

        </div>
    )
}