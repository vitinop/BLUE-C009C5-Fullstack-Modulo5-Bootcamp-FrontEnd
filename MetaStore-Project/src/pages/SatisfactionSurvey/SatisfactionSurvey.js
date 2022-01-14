import './SatisfactionSurvey.css';
import Button from '../../components/Button/Button';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { RiEmotionUnhappyLine } from 'react-icons/ri';



export default function SatisfactionSurvey() {
    return(
        <div className='satisfaction-survey-center'>
        <div className='satisfaction-survey-father'>
            <div className='satisfaction-survey-title'>
                <p>Congratulations on your new acquisition!</p>
            </div>

            <div className='satisfaction-survey-subtitle'>
                <p>What did you think of this experience?</p>
            </div>

            <div className='satisfaction-survey-emoticon'>
                <HiOutlineEmojiHappy />
                <RiEmotionUnhappyLine />
            </div>

            <div className='satisfaction-survey-description'>
                <p>We are in constant evolution, if you want to contribute, we promise to consider your opinion with great care.</p>
            </div>

            <div className='satisfaction-survey-opinion-sent'>
                <p>Opinion sent successfully</p>
            </div>

            <div className='satisfaction-survey-button'>
                <a href='/'>Back to home</a>
                
            </div>
        </div>
        </div>
    )
    
}