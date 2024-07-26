import './QRCode.css';
import Process from './process';

export default function QRCode(){

    const {text,img,style,handleInput,handleClick,handleDownload}=Process();

    return (
        <div className="outer">
            <h1>Generate QR Code</h1>
            <div className="container">
                <p>Enter Your text or URL</p>
                <input type='text' placeholder='Text or URL' value={text} onChange={handleInput}></input>
                <div className="image-box" style={style}>
                    <img src={img} alt="QR Code" className='QRImage'/>
                </div>
                <button onClick={handleClick}>Generate QR Code</button>
                {img && (
                    <button onClick={handleDownload}>Download QR Code</button>
                )}
        </div>
        </div>
    )
}