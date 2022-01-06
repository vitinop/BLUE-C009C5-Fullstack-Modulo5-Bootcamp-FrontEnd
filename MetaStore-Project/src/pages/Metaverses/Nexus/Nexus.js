import './Nexus.css';
import Card from '../../../components/Card/Card';
import NexusCategories from './NexusCategories';

export default function Nexus() {
    return(
        <div className='nexus-father'>
            <div className='nexus-title'>
                <img src='https://static.wixstatic.com/media/9013c5_251b9f1c2ba846428df76842d5e2a59a~mv2.jpg/v1/fill/w_320,h_180,q_90/9013c5_251b9f1c2ba846428df76842d5e2a59a~mv2.jpg' alt='nexus-logo'></img>
                <p>Nexus</p>
            </div>

            <div className='nexus-description'>
                <img src='https://static.wixstatic.com/media/11062b_b4579106bde4473c982f2ab9a34b1b49~mv2.jpeg/v1/fill/w_980,h_551,fp_0.50_0.50,q_90/11062b_b4579106bde4473c982f2ab9a34b1b49~mv2.jpeg' alt='nexus slider'></img>
                <p>The Nexus VR develops projects, events and training for companies with virtual reality technologies, augmented reality and the so-called mixed reality, as well as advertising pieces and showrooms for real estate projects.</p>
            </div>

            <NexusCategories />
            <label>Events</label>
            <Card alt='events' />
            <label>Corporate training</label>
            <Card alt='corporate training' />
            

        </div>
    )
    
}