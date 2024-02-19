
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use"
export const ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisiblity] = useState(false)

    useEffect(()=>{
      if(pageYOffset > 400){
        setVisiblity(true)
      }else{
        setVisiblity(false)
      }
    }, [pageYOffset])

    const ScrollToTop = () => window.scrollTo({top:0, behavior:"smooth"})

    if(!visible){
      return false
    }
  return (
    <div onClick={ScrollToTop} className="fixed bottom-3 left-1/2 w-10 h-10 rounded-full text-white bg-green-700 cursor-pointer text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mx-auto mt-1 translate-y-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
};
