import * as bannerStyles from './Banner.module.css';

const Banner = () => {
    return (
        <div>
            <h1 className={bannerStyles.title}>CONTIGO AVIATION</h1>
            <p className={bannerStyles.subtitle}>airplane rental</p>
        </div>
    )
}

export default Banner
