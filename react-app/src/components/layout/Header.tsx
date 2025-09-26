import { Link } from "react-router-dom"
import Logo from "../../assets/react.svg"
export default function Hedaer() {
    return (
        <>
            <div className="navbar navbar-expand-lg bg-primary">
                <div className="container text-light">
                    <div className="nav-brand">
                        <img src={Logo} className="img " alt="" />
                    </div>
                    <ul className="nav  justify-content-center me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white fs-3">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}