import './ProductEdit.css';
import Button from '../../components/Button/Button';

export default function ProductEdit() {
    return(
        <div className='product-edit-father'>
            <div className='product-edit-title'>
                <h2>Product Edit</h2>
            </div>

            <div className='product-edit-items'>
                <label>Image :</label>
                <input type='text' placeholder='new image'></input>

                <label>Value :</label>
                <input type='text' placeholder='new value'></input>

                <label>Brand :</label>
                <input type='text' placeholder='new brand'></input>

                <label>Metaverse :</label>
                <input type='text' placeholder='new metaverse'></input>

                <label>Categorie :</label>
                <input type='text' placeholder='new categorie'></input>

                <label>Description :</label>
                <input type='text' placeholder='new description'></input>

            </div>
            <div classname='product-edit-button'>
                <Button />
            </div>
        </div>
    )
    
}
