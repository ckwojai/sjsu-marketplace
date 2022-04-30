import Container from '../../components/container'
import Link from "next/link"

export default function LandingPage() {
    return (
        <Container>
            <h3 className="main-title text-center">login / register</h3>
            <p className="main-para text-center">Join in to our SJSU Community</p>
            <div className="buttons text-center">
                <Link href="/logreg/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link href="/logreg/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </Container>
    )
}

// const HeaderStyle = {
//     width: "100%",
//     height: "100vh",
//     background: `url(${BackgroundImage})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover"
// }