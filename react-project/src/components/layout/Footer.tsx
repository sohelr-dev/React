function Footer() {
    return (
        <>
            <div className="container-custom">
                <footer className="pc-footer bg-light border-top mt-auto py-3">
                    <div className="container-fluid">
                        <div className="row align-items-center text-center text-sm-start">
                            {/* Left Side (Text) */}
                            <div className="col-sm mb-2 mb-sm-0">
                                <p className="mb-0 small">
                                    SOHEL &#9829; crafted by Team{' '}
                                    <a href="https://sohelir.com" target="_blank" rel="noopener noreferrer">Codedthemes</a>.
                                    Distributed by <a href="https://sohelit.com/eventhub" target="_blank" rel="noopener noreferrer">SOHEL RANA</a>.
                                </p>
                            </div>

                            {/* Right Side (Links) */}
                            <div className="col-sm-auto">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><a href="./index.html">Home</a></li>
                                    {/* Add more links if needed */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>

    );
}

export default Footer;
