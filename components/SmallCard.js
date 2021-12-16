import Image from "next/image"

function SmallCard({title, text, img }) {
    return (
        <div className="flex flex-col items-center text-center m-2 mt-8 space-x-4 cursor-pointer">
        
            <div className="relative h-24 w-24">
                <Image src={`${img}`} layout='fill' className="rounded-lg" />
            </div>

            <div className="" >
                <h2 className="font-bold">{title}</h2>
                <h3 className="mt-2"> {text}</h3>
            </div>
        
        </div>
        
    )
}

export default SmallCard
