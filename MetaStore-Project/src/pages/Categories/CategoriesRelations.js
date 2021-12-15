import './CategoriesRelations.css';
import Relations from '../../components/Relations/Relations';
import Button from '../../components/Button/Button';


export default function CategoriesRelations() {
    return(
        <div className='relations-categories-father'>
            <div className='relations-categories'>
                <Relations />
            </div>

            <Button />
            <h1>INCLUIR LINK NO BOTAO PARA DIRECIONAR PARA A HOME 'Back to home'</h1>
        </div>
    )
    
}