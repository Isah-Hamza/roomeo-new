import React , {useEffect, useState}  from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const PrivacyPolicy = () => {
  const [iframeHeight, setIframeHeight] = useState(0);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleIframeLoad = () => {
    const iframe = document.getElementById('webpage-iframe');
    // console.log(iframe.document)
    setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://privacy.roomeo.ng/", { mode:"no-cors" });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        setData(html);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    const iframe = document.getElementById('webpage-iframe');
    iframe.addEventListener('load', handleIframeLoad);
    
    return () => iframe.removeEventListener('load', handleIframeLoad);
  }, []);

  return (
    <div>
        <Header />
        <div className="mt-[150px]"></div>

        <div className='about max-w-[1100px] px-10 mx-auto my-12' >
            <div className="text-center">
                <h1 className='text-7xl font-semibold' >Privacy Policy</h1>
            </div>
            {/* <div dangerouslySetInnerHTML={{__html:data}} ></div> */}
            <iframe
              id='webpage-iframe'
              src={'https://privacy.roomeo.ng/'}
              style={{ width: "100%", height: iframeHeight, border: "none" }}
              title="Web Page Viewer"
            ></iframe>
        </div>
        <Footer />
    </div>
  )
}

export default PrivacyPolicy
