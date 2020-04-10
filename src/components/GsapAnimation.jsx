import React from "react"
import { useEffect ,useRef} from "react"
import { TweenMax, Elastic } from "gsap"

const GsapAnimation = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      [blue.current, yellow.current],
      0.6,
      { y: 16 },
      { y: -16, yoyo: true, repeat: -1 }
    );
    TweenMax.fromTo(
      [red.current, green.current],
      0.6,
      { y: -16 },
      { y: 16, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <svg viewBox="0 0 150 33.2" width="180" height="100">
      <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
      <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
      <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
      <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
    </svg>
  );
};

export default GsapAnimation;
