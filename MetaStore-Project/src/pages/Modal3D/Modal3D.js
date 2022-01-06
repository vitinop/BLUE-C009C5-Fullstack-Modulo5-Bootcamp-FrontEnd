import './Modal3D.css';
import Button from '../../components/Button/Button';
import '@google/model-viewer';
import Card3D from '../../components/Card3D/Card3D';

export default function Modal3D() {
    return(
        <div className='center-modal3d'>
        <div className='modal3d-father'>
            <Card3D></Card3D>
            <Button />
        </div>
        </div>
    )
    
}