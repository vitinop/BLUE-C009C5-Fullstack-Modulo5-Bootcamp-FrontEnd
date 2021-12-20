import './SatisfactionSurvey.css';
import Button from '../../components/Button/Button';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { RiEmotionUnhappyLine } from 'react-icons/ri';



export default function SatisfactionSurvey() {
    return(
        <div className='satisfaction-survey-father'>
            <div className='satisfaction-survey-title'>
                <h1>LINKAR NOME DO USUÁRIO, Congratulations on your new acquisition!</h1>
            </div>

            <div className='satisfaction-survey-subtitle'>
                <h5>What did you think of this experience?</h5>
            </div>

            <div className='satisfaction-survey-emoticon'>
                <HiOutlineEmojiHappy />
                <RiEmotionUnhappyLine />
            </div>

            <div className='satisfaction-survey-description'>
                <h5>We are in constant evolution, if you want to contribute, we promise to consider your opinion with great care.</h5>
            </div>

            <div className='satisfaction-survey-opinion-sent'>
                <h5>Opinion sent successfully</h5>
            </div>

            <div className='satisfaction-survey-button'>
                <Button />
                <h1>Incluir texto argumento no botão "Back to Home"</h1>
            </div>
        </div>
    )
    
}