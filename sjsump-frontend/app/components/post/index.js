import Image from 'next/image'

function Post({ title, image, price, description }) {
    return (
            <div className="p-6 mt-4 max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between space-x-2">
                <div className="basis-1 column-3">
                    <Image className="" height="100%" width="100%" src={image} alt={`img_${title}`} />
                </div>
                <div className="basis-12 grow column-6">
                    <div className="text-xl font-medium text-black">{title}</div>
                    <p className="text-slate-500">{description}</p>
                </div>
                <div className="basis-1 column-3">
                    <p className="text-slate-500">${price}</p>
                </div>
            </div>
    )
}

export default Post
