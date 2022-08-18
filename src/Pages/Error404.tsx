import { Link } from 'react-router-dom';

const Error404 = () => {
    return(
        <>
            <div className="main">
                <h2>Error 404 path not found</h2>
                <p><Link to="/"> click to go back</Link></p>
            </div>
        </>
    )
}
export default Error404