import './Search.css';
import ArrowRight from '../../components/ArrowRight/ArrowRight';
import { BiSearch } from 'react-icons/bi';


export default function Search() {
    return(
        <div className='search-father'>
            <BiSearch />
            <div className='search-input'>
                <input type='text' placeholder='search the metastore'></input> 
            </div>
            <div className='search-list'>

                <ul>

                    <li>metaverses</li>
                    <h1>CHAMAR O COMPONENTE DO METAVERSO, APENAS O ELEMENTO IMAGEM E NOME, DE TODOS ELES E INCLUIR NO CARROSSEL</h1>
                    <ArrowRight />

                    <li>categories</li>
                    <h1>CHAMAR O COMPONENTE DA CATEGORIA, APENAS O ELEMENTO IMAGEM E NOME, DE TODOS ELES E INCLUIR NO CARROSSEL</h1>
                    <ArrowRight />

                    <li>most relevant to you</li>
                    <h1>CHAMAR O COMPONENTE DOS METAVERSOS E CATEGORIAS(MESCLADOS), APENAS O ELEMENTO IMAGEM E NOME, DE TODOS ELES E INCLUIR NO CARROSSEL</h1>
                    <ArrowRight />

                </ul>

            </div>
        </div>
    )
    
}