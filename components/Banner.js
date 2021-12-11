import Image from "next/image"

import bannerBg from "../assets/img/banner-bg.gif"

function Banner() {
    return (
        <div className="absolute top-0 w-screen h-screen">
            <Image 
                src={bannerBg} 
                layout="fill"
                objectFit="cover"
                objectPosition='center'
                />

                
        </div>
    
    )
}

export default Banner



