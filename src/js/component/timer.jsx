import React, {useState, useEffect, useRef} from "react";


const Timer = (props) => {

    const [seconds, setSeconds] = useState(props.seconds);
    const [countUp, setCountUp] = useState(false);
    const [arrSeconds, setArrSeconds] = useState([]);
    const [pause, setPause]= useState(false);

    let intervalRef = useRef();

    // choice of counting up or down
    useEffect(()=>{
        if(props.seconds===0){
            setCountUp(true);
        }
    }, [props.seconds])

    useEffect(()=>{
       
        if(countUp){
            intervalRef.current=setInterval(()=>{
                setSeconds((prevSeconds)=>prevSeconds+1)
            }, 1000);
        } else{
            intervalRef.current=setInterval(()=>{
                setSeconds((prevSeconds=>prevSeconds-1))
            }, 1000)
        }
        return ()=>{
            clearInterval(intervalRef.current);
        };
    }, [countUp, seconds, handleClick]);

    // stopping the countdown at zero (0)
    useEffect(()=>{
        if(!countUp&&seconds<=0){
            setSeconds(0);
        }
    }, [countUp, seconds]);

   

    //updating the number and separate its digits
    useEffect(()=>{
        setArrSeconds(seconds.toString().split("").join("   "));
    },[seconds])

    // Pause / Run Button
    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
          } else {
            if (countUp) {
              intervalRef.current = setInterval(
                () => setSeconds((prevSeconds) => prevSeconds + 1),
                1000
              );
            } else {
              intervalRef.current = setInterval(
                () => setSeconds((prevSeconds) => prevSeconds - 1),
                1000
              );
            }
          }  
    setPause((prevSeconds)=>!prevSeconds)
    };


    return (
   

    <div className="container">
        
            <div className="flip-card">
                <div className="top">{arrSeconds} </div>
                <div className="bottom">{arrSeconds} </div>   
            </div>
            <button onClick={handleClick}>{pause ? "Play" : "Pause"}</button>
            
            
    </div>

   

        
        
    )
}

export default Timer;