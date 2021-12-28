import Image from "next/image";
import BannerPublicImg from "../public/alexander-kaunas-xEaAoizNFV8-unsplash.jpg";
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-teal-700">
            <Image src={BannerPublicImg} layout="fill" objectFit="cover" className="opacity-50" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg md:text-xl font-bold text-white ">Let me guide you where should go!</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-150">Oh! Let's go</button>
            </div>
        </div>
    );
}

export default Banner;
