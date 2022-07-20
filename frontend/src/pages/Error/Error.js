import { Link } from 'react-router-dom'
import '../Error/Error.css'

function Error() {
    return (
        <div className="ErrorContainer">
            <h1>This page does't exists</h1>
            <Link to="/" className='ErrorLink'>Go Back to Home Page</Link>
        </div>
    );
}

export default Error;
