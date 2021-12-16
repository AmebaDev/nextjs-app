import Image from "next/image"



function Banner() {
    return (
    <>
    {/* Welcome banner */}
        <div className="flex justify-center h-screen">
            <div className="absolute top-0 w-full h-full">
                <Image 
                    src='/img/banner-bg.gif'
                    layout="fill"
                    objectFit="cover"
                    objectPosition='center'
                    />
            </div>
            <div className="welcome relative m-auto justify-center text-white text-center ">
                <h3 className="text-9xl sm:text-[13rem]">Hello</h3>
                <p className="welcome-text  sm:text-2xl">"Тут должен быть какой-то текст, но мы его еще не придумали"</p>
                <button className='text-purple-500 bg-white px-3 py-3
                shadow-md rounded-full  text-sm sm:text-base font-bold my-10  hover:shadow-xl active:scale-90  transition duration-150'>
                Нажми здесь чтобы присоединиться LamaFam
                </button>
            </div>
        </div>        
    </>
    )
}

export default Banner



