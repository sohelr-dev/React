import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-6">
                    <h1 className="text-center fs-1 p-4 mt-4">Welcome To Home Page</h1>
                    <div className="text-center">
                        <div className="card">
                            <h2>Sohel Rana</h2>
                            <h2>React Dev</h2>
                            <h3><Link to="http://sohelit.com/eventhub">Visit My Site</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home