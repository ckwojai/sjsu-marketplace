import Container from '../../components/container'
import { createNewPost } from "../../lib/api-client"
import { useState } from "react"
function Form() {
    const handleSubmit = async event => {
        event.preventDefault()
        console.log(formState)
        console.log(JSON.stringify(formState))
        const res_data = await createNewPost(formState)

        console.log(res_data)
        // result.user => 'Ada Lovelace'
    }

    const [formState, setFormState] = useState({
        title: "Please Enter Your Title",
        price: 0,
        desc: "Please Enter Your Description",
        image: null
    });

    function handleChange(e) {
        if (e.target.files) {
            setFormState({ ...formState, [e.target.name]: e.target.files[0] });
        } else {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log(formState)
    }
    return (
        <Container>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-4/5 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-base font-bold mb-2">
                            Title
                        </label>
                        <input className="appearance-none block w-full bg-transparent border border-green-300 text-white rounded py-3 px-4 mb-3 leading-tight focus:bg-gray-500 focus:border-gray-500" id="grid-first-name" type="text" placeholder="Title" name="title" onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/5 px-3">
                        <label className="block uppercase tracking-wide text-white text-base mb-2 font-bold">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-transparent border border-green-300 text-white rounded py-3 px-4 leading-tight focus:bg-gray-500 focus:border-gray-500" id="grid-last-name" type="number" placeholder="0" name="price" onChange={handleChange}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-base mb-2 font-bold">
                            Description
                        </label>
                        <textarea className="appearance-none block w-full bg-transparent border border-green-300 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-500 focus:border-gray-500" id="grid-password" type="text" rows="10" placeholder="Description" name="desc" onChange={handleChange} />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <div className="w-full md:w-4/5 px-3 mb-6 md:mb-0">
                            <input className="appearance-none block w-full text-white border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="file" name="image" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </Container>
    )
}
export default Form