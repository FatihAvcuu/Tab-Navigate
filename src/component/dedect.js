import React,{useRef,useEffect} from 'react'

const Dedect = (props) => {
    let mainDiv = useRef()
    useEffect(() => {
        if(props.scroll >= mainDiv.current.offsetTop && props.scroll <= (mainDiv.current.offsetTop + window.innerHeight)){
            props.updatePage(props.type)
        }
    });
    return (
        <div ref={mainDiv} className="dedect">
            {
                props.children
            }
        </div>
    )
}
export default Dedect