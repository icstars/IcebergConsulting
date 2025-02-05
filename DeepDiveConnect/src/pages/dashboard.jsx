import { useEffect, useRef } from "react";

const Dashboard = () => {
  const iframeRef = useRef(null);

  // Handle iframe communication
  useEffect(() => {
    const handleMessage = (event) => {
      // Verify the origin is trusted
      if (event.origin !== "https://powerbi.microsoft.com") return;

      // Handle messages from Copilot iframe
      console.log("Message from iframe:", event.data);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className='background'>
      <div className="boxhome">
        <iframe className="dashboard"
        ref={iframeRef}
        title="Microsoft Copilot"
        src="https://playground.powerbi.com/sampleReportEmbed"
        sandbox="allow-scripts allow-same-origin"
        allow="microphone; camera"
        loading="lazy"
        />
      </div>
    </div>
    
  );
};

export default Dashboard;