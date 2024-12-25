import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { FaStar } from "react-icons/fa";
const HappyClient = () => {


    const reviewsClient = [
        {
            "name": "Norbert Anderson",
            "profession": "Teacher",
            "rating": 5,
            "review": "Great food at reasonable prices. Great service and the owners are terrific. This was my first time to visit this restaurant, but it will not be my last!"
        },
        {
            "name": "Sophia Reynolds",
            "profession": "Graphic Designer",
            "rating": 4,
            "review": "The food was delicious, and the ambiance was great. A little crowded, but overall a good experience!"
        },
        {
            "name": "James Carter",
            "profession": "Software Engineer",
            "rating": 5,
            "review": "Excellent service and amazing dishes! I highly recommend this place for a family dinner."
        },
        {
            "name": "Emily Johnson",
            "profession": "Freelance Writer",
            "rating": 3,
            "review": "The food was decent, but the service was a bit slow. Might give it another try."
        },
        {
            "name": "Michael Brown",
            "profession": "Photographer",
            "rating": 4,
            "review": "Loved the dessert options! The staff was friendly, but the main course took too long to arrive."
        },
        {
            "name": "Isabella Martinez",
            "profession": "Doctor",
            "rating": 5,
            "review": "Absolutely fantastic! The flavors were spot on, and the staff went above and beyond to make us feel welcome."
        },
        {
            "name": "Liam Wilson",
            "profession": "Construction Worker",
            "rating": 2,
            "review": "Not a great experience. The food was cold, and the staff seemed overwhelmed. Hope they improve soon."
        },
        {
            "name": "Olivia Davis",
            "profession": "Marketing Specialist",
            "rating": 4,
            "review": "Great food and a cozy environment. A perfect spot for a casual date night."
        }
    ]



    return (
        <div className="my-10 container mx-auto px-4 md:px-10">
            <div className="flex flex-col justify-center items-center text-center">
                <p className="text-primaryColor">Happy Client</p>
                <h1 className="text-3xl md:text-5xl font-bold">What's Our Customer Say</h1>
            </div>
            <section className='my-10 mx-auto'>
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => {/*console.log(swiper)*/}}
                    onSlideChange={() => {/*console.log('slide change')*/}}
                    autoplay={{
                        delay:2000
                    }}

                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        reviewsClient.map((review, idx) => <SwiperSlide key={idx} >
                            <div className="card bg-base-100 w-80 xl:w-96 shadow-xl border border-primaryColor">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">{review.name}</h2>
                                    <h2 className=' font-semibold'>{review.profession}</h2>
                                    <p>{review.review}</p>
                                    <div className='flex gap-1'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default HappyClient;