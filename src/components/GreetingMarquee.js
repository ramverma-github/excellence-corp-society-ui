import React from "react";
import MarqueeCSS from "../css/greetingMarquee.css"

const GreetingMarquee = () => {
    return(
        <div className='marquee-bg-color'>
        <marquee className='text-mq'>Your are Welcome!!</marquee>
    </div>
    );
}
export default GreetingMarquee;