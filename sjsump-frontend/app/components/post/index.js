import Image from 'next/image'

function Post({ title, image, price, description }) {
    return (
            <div class="p-6 mt-4 max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between space-x-2">
                <div class="basis-1 column-3">
                    <Image class="" height="100%" width="100%" src={image} alt={`img_${title}`} />
                </div>
                <div class="basis-12 grow column-6">
                    <div class="text-xl font-medium text-black">{title}</div>
                    <p class="text-slate-500">{description}</p>
                </div>
                <div class="basis-1 column-3">
                    <p class="text-slate-500">${price}</p>
                </div>
            </div>
    )
}

export default Post
