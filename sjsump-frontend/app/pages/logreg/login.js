import Link from "next/link"

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h1 className="text-4xl text-white">Sign In</h1>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link href="/logreg/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" className="mt-5">Login</button>
                </p>
            </form>
                <p className="text-white">First time? <Link href="/logreg/register"><a className="text-blue-300">Create an account</a></Link>.</p>
                <Link href="/posts"><a className="text-blue-300">Back to Posts</a></Link>
        </div>
    )
}
