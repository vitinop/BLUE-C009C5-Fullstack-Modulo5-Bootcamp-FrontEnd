import './SubCategoriesRelations.css';
import Relations from '../../components/Relations/Relations';
import Button from '../../components/Button/Button';


export default function SubCategoriesRelations() {
    return(
        <div className='relations-subcategories-father'>
            <div className='relations-subcategories'>
                <Relations />
            </div>

            <Button />
            <h1>INCLUIR LINK NO BOTAO PARA DIRECIONAR PARA A HOME 'Back to home'</h1>
        </div>
    )
    
}