import logo from '../../Images/tailwindLogo.png';

const Banner = () => {
    return (
        <div className="mb-28">
            <div className="flex w-1/3 m-auto justify-evenly items-center">
                <h1 className="text-7xl text-center">TAILWINDS AVIATION</h1>
                <div className="w-28">
                    <img className="w-full" src={logo} alt="tailwind aviation logo" />
                </div>
            </div>
            <p className="text-3xl text-center m-5">airplane rental</p>
        </div>
    )
}

export default Banner
