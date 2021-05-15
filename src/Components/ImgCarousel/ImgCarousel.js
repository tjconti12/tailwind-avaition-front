import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import lakeEola from '../../Images/LakeEola.jpeg';
import cirrus from '../../Images/cirrusPic.png';
import cessna from '../../Images/cessnaPic.jpeg';

const ImgCarousel = () => {
    return (
        <Carousel infiniteLoop="true" autoPlay="true" interval="3000" showThumbs={false} showStatus={false} showArrows="false">
            <div>
                <img src={cessna} alt="" />
            </div>
            <div>
                <img src={lakeEola} alt="Lake Eola, Downtown Orlando, viewed from the air" />
            </div>
            <div>
                <img src={cirrus} alt="" />
            </div>
        </Carousel>
    )
}

export default ImgCarousel
