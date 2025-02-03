import { useEffect, useRef } from "react";

const ChatBot = () => {
  const iframeRef = useRef(null);

  // Handle iframe communication
  useEffect(() => {
    const handleMessage = (event) => {
      // Verify the origin is trusted
      if (event.origin !== "https://copilotstudio.microsoft.com") return;

      // Handle messages from Copilot iframe
      console.log("Message from iframe:", event.data);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className='background'>
       <div className="boxhome">
      <iframe className="chatchat"
        ref={iframeRef}
        title="Microsoft Copilot"
        src="https://copilotstudio.microsoft.com/environments/Default-88227c99-d157-4dbe-8e33-d8b3fcc29577/bots/cr69f_ryanIa/webchat?__version__=2"
        sandbox="allow-scripts allow-same-origin"
        allow="microphone; camera"
        loading="lazy"
      />
      </div>
    </div>
  );
};

export default ChatBot;