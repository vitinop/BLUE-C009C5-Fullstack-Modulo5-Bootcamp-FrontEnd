import './Adds.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Adds () {
    return(
        <div className='adds-center'> 
            <div className='adds-father'>
                <h2>Adds</h2>
                <div className="adds-video embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Uvufun6xer8"  allowfullscreen></iframe>
                </div>&nbsp;
                
                <h2>Banner</h2>
                    <div className='adds-banner'>
                        <h2>Meta</h2>
                            <a href="/"><img className='adds-image' src="/static/media/Logo-Gif-Text.67a62a4f.gif" alt="metastore"></img></a>
                        <h2>Store</h2>
                    </div>
            </div>
        </div>
    )
}

