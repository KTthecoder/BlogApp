import '../Categories/Categories.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

function Categories() {
    const [data, setData] = useState([])    
    let { slug } = useParams()
    const navigate  = useNavigate()

    useEffect(() => {
        GetBlogs()
    }, [slug])
 
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const GetBlogs = () => {
        const csrftoken = getCookie('csrftoken');
        
        fetch('http://127.0.0.1:8000/api/blogs/' + slug, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(response => response.json())
        .then(dataR => {
            if(data['response'] == "Category does not exists"){
                navigate("/error", {replace: true})
            }
            setData(dataR)
        })
        .catch(error => {
            console.log("Error while rendering articles")
        })
    }

    return (
        <div className="container">
            {data[0] && 
                <Link to={"/" + data[0].slug} className="SmallDiv">
                    <div className="SmallDivImgDiv">
                        <img src={data[0].frontImageFile} alt="react" className='SmallDivImg'/>
                    </div>
                    <div className='SmallDivHeaderDiv'>
                        <h1 className='SmallDivHeaderText'>{data[0].title}</h1>
                    </div>
                    <div className='SmallDivPDiv'>
                        <p className='SmallDivP'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                </Link>
            }
            {data[1] && 
                <Link to={"/" + data[1].slug} className="BigDiv">
                    <div className="BigDivImgDiv">
                        <img src={data[1].frontImageFile} alt="react" className='BigDivImg'/>
                    </div>
                    <div className='BigDivHeaderDiv'>
                        <h1 className='BigDivHeaderText'>{data[1].title}</h1>
                    </div>
                    <div className='BigDivPDiv'>
                        <p className='BigDivP'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                </Link>
            }
            {data[2] && 
                <Link to={"/" + data[2].slug} className="SmallDivReverse">
                    <div className='SmallDivHeaderDivReverse'>
                        <h1 className='SmallDivHeaderTextReverse'>{data[2].title}</h1>
                    </div>
                    <div className='SmallDivPDivReverse'>
                        <p className='SmallDivPReverse'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                    <div className="SmallDivImgDivReverse">
                        <img src={data[2].frontImageFile} alt="react" className='SmallDivImgReverse'/>
                    </div>
                </Link>
            }
            {data[3] && 
                <Link to={"/" + data[3].slug} className="BigDiv">
                    <div className="BigDivImgDiv">
                        <img src={data[3].frontImageFile} alt="react" className='BigDivImg'/>
                    </div>
                    <div className='BigDivHeaderDiv'>
                        <h1 className='BigDivHeaderText'>{data[3].title}</h1>
                    </div>
                    <div className='BigDivPDiv'>
                        <p className='BigDivP'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                </Link>
            }
            {data[4] && 
                <Link to={"/" + data[4].slug} className="SmallDiv">
                    <div className="SmallDivImgDiv">
                        <img src={data[4].frontImageFile} alt="react" className='SmallDivImg'/>
                    </div>
                    <div className='SmallDivHeaderDiv'>
                        <h1 className='SmallDivHeaderText'>{data[4].title}</h1>
                    </div>
                    <div className='SmallDivPDiv'>
                        <p className='SmallDivP'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                </Link>
            }
            {data[5] && 
                <Link to={"/" + data[5].slug} className="SmallDivReverse">
                    <div className='SmallDivHeaderDivReverse'>
                        <h1 className='SmallDivHeaderTextReverse'>{data[5].title}</h1>
                    </div>
                    <div className='SmallDivPDivReverse'>
                        <p className='SmallDivPReverse'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                    <div className="SmallDivImgDivReverse">
                        <img src={data[5].frontImageFile} alt="react" className='SmallDivImgReverse'/>
                    </div>
                </Link>
            }
            {data[6] && 
                <Link to={"/" + data[6].slug} className="SmallDivReverse">
                    <div className='SmallDivHeaderDivReverse'>
                        <h1 className='SmallDivHeaderTextReverse'>{data[6].title}</h1>
                    </div>
                    <div className='SmallDivPDivReverse'>
                        <p className='SmallDivPReverse'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                    <div className="SmallDivImgDivReverse">
                        <img src={data[6].frontImageFile} alt="react" className='SmallDivImgReverse'/>
                    </div>
                </Link>
            }
            {data[7] && 
                <Link to={"/" + data[7].slug} className="SmallDiv">
                    <div className="SmallDivImgDiv">
                        <img src={data[7].frontImageFile} alt="react" className='SmallDivImg'/>
                    </div>
                    <div className='SmallDivHeaderDiv'>
                        <h1 className='SmallDivHeaderText'>{data[7].title}</h1>
                    </div>
                    <div className='SmallDivPDiv'>
                        <p className='SmallDivP'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                </Link>
            }
            {data[8] && 
                <Link to={"/" + data[8].slug} className="BigDiv">
                    <div className="BigDivImgDiv">
                        <img src={data[8].frontImageFile} alt="react" className='BigDivImg'/>
                    </div>
                    <div className='BigDivHeaderDiv'>
                        <h1 className='BigDivHeaderText'>{data[8].title}</h1>
                    </div>
                    <div className='BigDivPDiv'>
                        <p className='BigDivP'>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                    </div>
                </Link>
            }
        </div>
    );
}

export default Categories;

