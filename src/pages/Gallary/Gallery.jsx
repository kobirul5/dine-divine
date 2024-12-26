import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FoodImage from "../../assets/img/allFood.jpg"
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
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Title from "../Share/Title";
import AuthContext from "../../provider/AuthContext";

const Gallery = () => {
    const [open, setOpen] = useState(false)
    const {user} = useContext(AuthContext)

     const galleryData = [
        {
          id: 1,
          image: `${Image1}`,
          title: "Classic Margherita Pizza",
          description: "A simple yet delicious classic with fresh basil, mozzarella, and tomato sauce."
        },
        {
          id: 2,
          image: `${Image2}`,
          title: "Grilled Chicken Salad",
          description: "Healthy and refreshing with fresh greens, grilled chicken, and a tangy vinaigrette."
        },
        {
          id: 3,
          image: `${Image3}`,
          title: "Gourmet Burger",
          description: "A juicy burger topped with caramelized onions, cheese, and fresh veggies."
        },
        {
          id: 4,
          image: `${Image4}`,
          title: "Spaghetti Carbonara",
          description: "A creamy Italian pasta dish with pancetta, parmesan, and a hint of garlic."
        },
        {
          id: 5,
          image: `${Image5}`,
          title: "Seafood Platter",
          description: "A luxurious mix of shrimp, lobster, and scallops, served with garlic butter."
        },
        {
          id: 6,
          image: `${Image6}`,
          title: "Sushi Assortment",
          description: "An artistic selection of fresh sushi rolls and sashimi."
        },
        {
          id: 7,
          image: `${Image7}`,
          title: "Vegetable Stir-Fry",
          description: "A vibrant mix of seasonal vegetables stir-fried in a savory sauce."
        },
        {
          id: 8,
          image: `${Image8}`,
          title: "Tandoori Chicken",
          description: "Spicy and flavorful chicken cooked in a traditional clay oven."
        },
        {
          id: 9,
          image: `${Image9}`,
          title: "Chocolate Lava Cake",
          description: "A warm, gooey chocolate cake with a molten center."
        },
        {
          id: 10,
          image: `${Image10}`,
          title: "Caesar Salad",
          description: "Crisp romaine lettuce with Caesar dressing, croutons, and shaved parmesan."
        },
        {
          id: 11,
          image: `${Image5}`,
          title: "Beef Steak",
          description: "A perfectly grilled steak served with mashed potatoes and sautéed vegetables."
        },
        {
          id: 12,
          image: `${Image1}`,
          title: "Fruit Parfait",
          description: "A refreshing dessert with layers of fresh fruits, yogurt, and granola."
        }
      ];
      


    return (
        <div className=" mb-14">
            <div>
                <Title
                    title={"Our Gallery"}
                    image={FoodImage}
                    pageName={"Gallery"}
                ></Title>
            </div>
            <div className="container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
                {
                    galleryData.map((data)=><button key={data.id} onClick={() => setOpen(true)}>
                    <div className="relative w-72 h-72 overflow-hidden">
                        <img src={data.image} className="w-full h-full rounded-sm object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <div className="flex flex-col text-white justify-center items-center">
                                <span className="text-white text-4xl m-3"><FaSearch /></span>
                                <p>{data.description}</p>
                            </div>

                        </div>
                    </div>
                </button>)
                }
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={galleryData.map((data)=>({src: data.image}))}
            />
        </div>
    );
};

export default Gallery;