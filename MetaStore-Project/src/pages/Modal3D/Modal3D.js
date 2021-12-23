import './Modal3D.css';
import Button from '../../components/Button/Button';
import '@google/model-viewer';

export default function Modal3D() {
    return(
        <div className='center-modal3d'>
        <div className='modal3d-father'>
            <model-viewer src="" ar ar-modes="webxr scene-viewer quick-look" camera-controls></model-viewer>
            
        

            <h1>IMPORTAR COMPONENTE MODAL GENERICO</h1>
            <Button />
        </div>
        </div>
    )
    
}