import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const ReviewCarousel = () => {
    return (
        <div className="h-600">
            <Carousel infiniteLoop="true" autoPlay="true" interval="3000" showThumbs={false} showStatus={false} >
                <div className="my-20">
                    <div className="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                    </div>
                    <p className="text-2xl mb-8">This place is awesome!! 5 stars all day</p>
                    <div className="w-48 h-0.5 bg-gray-300 m-auto"></div>
                </div>
                <div className="my-20">
                    <div className="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p className="text-2xl mb-8">This place is awesome!! 5 stars all day</p>
                    <div className="w-48 h-0.5 bg-gray-300 m-auto"></div>
                </div>
                <div className="my-20">
                    <div className="mb-4">
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star text-yellow-400"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p className="text-2xl mb-8">This place is awesome!! 5 stars all day</p>
                    <div className="w-48 h-0.5 bg-gray-300 m-auto"></div>
                </div>
            </Carousel>
        </div>
    )
}

export default ReviewCarousel