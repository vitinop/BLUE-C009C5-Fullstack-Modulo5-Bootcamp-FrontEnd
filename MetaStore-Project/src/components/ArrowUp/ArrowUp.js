import './ArrowUp.css';
import { BsArrowUpCircle } from 'react-icons/bs';


function arrowUp () {
    arrowUp = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}

}


export default function ArrowUp() {
    return(
        <div className='arrowUp-father'>
                <button onclick="topFunction()" id="myBtn" title="Go to top">
                <BsArrowUpCircle />
                </button>
        </div>
    )
    
}