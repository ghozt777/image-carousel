import {useState} from "react"
import {imageData} from "./ImageData"
import {GrFormNext,GrFormPrevious} from "react-icons/gr"
export const ImageCarousel = () => {
    
    const [curr,setCurr] = useState(0)
    function nextImage(){
        setCurr(c => c===imageData.length-1?0:c+1)
    }
    function prevImage(){
        setCurr(c => c===0?imageData.length-1:c-1)
    }
    

    return(
        <div className="carousel__container">
            <button className="btn btn-next" onClick={nextImage}> <GrFormNext/> </button>
            <button className="btn btn-prev" onClick={prevImage}> <GrFormPrevious /> </button>
          {
              imageData.map((image,index) => {
                  return(
                      <div className={index===curr?"image active" : "image"}>
                          {index===curr&&<img src={image.url} alt="mountains" />}
                          <small className="watermark">all rights reserved to ghozt777</small>
                      </div>
                  )
              })
          }  
        </div>
    )
}
