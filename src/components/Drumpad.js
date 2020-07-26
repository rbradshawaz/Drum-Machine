import React, {useState, useEffect} from 'react';

const Drumpad = ({setDisplayText, textToDisplay, keyCharacter, src}) => {

    const [active, setActive] = useState(false); //tracks whether the particular drumpad has been activated for styling
    let player = new Audio(src);
    player.id = keyCharacter;

    const playSound = () => {
        setActive(true);
        setDisplayText(textToDisplay);
        player.play();
    } 

    const keyPressed = (e) => {
        if(e.key === keyCharacter.toLowerCase()){
            playSound();
        }  
    }

    const keyReleased = () => {
        setActive(false);
    }

    const onClick = () => {playSound()
        setTimeout(() => setActive(false), 100);
    }

    useEffect(() => { //add event listeners for key presses
        document.addEventListener('keydown', keyPressed);
        document.addEventListener('keyup', keyReleased);
        // Remove event listeners on cleanup
        return () => {
            document.removeEventListener('keydown', keyPressed);
            document.removeEventListener('keyup', keyReleased);
        };
      }, []);

    return (
        <div className="drum-pad">
            <player />
            <button 
                onKeyPress={keyPressed} 
                className={active ? 'btn btn-outline-info active':'btn btn-outline-info'} 
                onClick={onClick} 
                aria-pressed={active}
            >{keyCharacter}</button>
        </div>
    )
}

export default Drumpad
