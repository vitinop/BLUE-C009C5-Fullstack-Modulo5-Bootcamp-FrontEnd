import './CategoriesRelations.css';
import Relations from '../../components/Relations/Relations';


export default function CategoriesRelations() {
    return(
        <div className='relations-categories-father'>
            <div className='relations-categories'>
                <Relations />
            </div>

            <a href='/'>Back to home</a>
        </div>
    )
    
}