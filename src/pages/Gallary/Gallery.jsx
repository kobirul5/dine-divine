import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image1 from "../../assets/gallary/1.jpg"
import Image2 from "../../assets/gallary/2.jpg"
import Image3 from "../../assets/gallary/3.jpg"
import Image4 from "../../assets/gallary/4.jpg"
import Image5 from "../../assets/gallary/5.jpg"
import Image6 from "../../assets/gallary/6.jpg"
import Image7 from "../../assets/gallary/7.jpg"
import Image8 from "../../assets/gallary/8.jpg"
import Image9 from "../../assets/gallary/9.jpg"
import Image10 from "../../assets/gallary/10.jpg"
import { useState } from "react";

const Gallery = () => {
    const [open, setOpen] = useState(false)

    const images = [{
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
    }]


    return (
        <div className="container mx-auto px-5 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image1} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image2} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image3} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image4} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image5} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image6} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image7} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image8} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image9} alt="" /></button>
                <button onClick={()=> setOpen(true)}><img  className="h-[400px] w-[400px] object-cover " src={Image10} alt="" /></button>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: Image1 },
                    { src: Image2 },
                    { src: Image3 },
                    { src: Image4 },
                    { src: Image5 },
                    { src: Image6 },
                    { src: Image7 },
                    { src: Image8 },
                    { src: Image9 },
                    { src: Image10 },

                ]}
            />
        </div>
    );
};

export default Gallery;