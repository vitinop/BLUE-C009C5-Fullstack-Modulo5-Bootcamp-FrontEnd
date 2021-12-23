import './Relations.css';
import { IoIosArrowForward } from 'react-icons/io'

export default function Relations(){
    return(
        <div className='relations-father'>
            <div className='relations-title'>
                <h3>Nome da relação</h3>
            </div>

            <div className='relations-item'>
                    <li className='li-relations'>Meta(Oculos)<IoIosArrowForward/></li>
                    <li className='li-relations'>Omniverse<IoIosArrowForward/></li>
                    <li className='li-relations'>Nikeland<IoIosArrowForward/></li>
                    <li className='li-relations'>Roblox<IoIosArrowForward/></li>
                    <li className='li-relations'>Sandbox<IoIosArrowForward/></li>
            </div>
        </div>

    )
}