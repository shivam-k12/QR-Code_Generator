import { useState } from 'react';
export default function Process(){
    const [text,setText]=useState('');
    const [img,setImg]=useState("");
    const [style,setStyle]=useState({display:"none"});

    let getQRcode= async()=>{
        let url=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`
        let response=await fetch(url);
        let imageSRC=response.url;
        console.log(imageSRC)
        return imageSRC;
    };

    let handleInput=(event)=>{
        setText(event.target.value);
    };

    let handleClick= async()=>{
       let image=await getQRcode();
        setImg(`${image}`);
        setStyle((prev)=>{
            return {...prev,display:"flex"}
        })
        setText("");
    }

    let handleDownload = async () => {
        try {
            let response = await fetch(img);
            let blob = await response.blob();
            let downloadUrl = URL.createObjectURL(blob);
    
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'QRCode.png';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };
    
    

    return  {text,img,style,handleInput,handleClick,handleDownload};
}