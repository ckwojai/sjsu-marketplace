import Link from "next/link"
import Container from "../../components/container"
export default function SignUpPage() {

    return (
        <Container>
            <div className="text-center m-5-auto">
                <h1 className="text-4xl text-white">Join Us</h1>
                <h5 className="text-lg text-white">Create your personal account</h5>
                <form action="/home">
                    <p>
                        <label>Username</label><br />
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Email address</label><br />
                        <input type="email" name="email" required />
                    </p>
                    <p>
                        <label>Password</label><br />
                        <input type="password" name="password" requiredc />
                    </p>
                    <p>
                        <input type="checkbox" name="checkbox" id="checkbox" required /> <span className="text-white">I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Register</button>
                    </p>
                </form>
                <p><Link href="/posts"><a className="text-blue-300">Back to Posts</a></Link></p>
            </div>
        </Container>
    )

}
