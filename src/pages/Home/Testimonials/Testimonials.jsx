import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

//import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'





const Testimonials = () => {
    const [reviwes, setReviews] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])


    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What our client say"
                heading="Testimonials"
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviwes.map(reviwe => <SwiperSlide
                        key={reviwe._id}

                    >
                        <div className="flex flex-col items-center  m-24">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviwe.rating}
                                readOnly
                            />
                            <p className="py-8">{reviwe.details}</p>
                            <h3 className="text-2xl text-orange-400">{reviwe.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </section>
    );
};

export default Testimonials;