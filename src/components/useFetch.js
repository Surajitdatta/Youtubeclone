import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { addContent } from '../Redux/Contentslice';
import { Context } from '../context/ContextProvider';
const api = "AIzaSyB4p7rEDTG70n_C-KKz_ahEUf_9waXHF8g"
const channelId = "UCKvGIKuKrrIuoXO8P4Fyn-Q"
var fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
const useFetch = () => {
    const[state, setState] = useState([])
    const { text, setText } = useContext(Context);
    // console.log("myText", text)
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(fetchurl).then((res)=>res.json()).then((resJson)=>{
            const result = resJson.items.map(doc=>({
                ...doc,
                Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
            }))
            setState(result)
            dispatch(addContent(result))
        })
    },[])
    // console.log(state)
    return {state}
    
}

export default useFetch;