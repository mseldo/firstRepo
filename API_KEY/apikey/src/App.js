import { useState, useEffect } from "react";

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = process.env.REACT_APP_KEY;
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") {
      return;
    }

    setIsLoading(true);

    const conversation = [
      ...chatMessages,
      { role: "user", content: inputMessage }
    ];

    const requestData = {
      messages: conversation
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.choices && data.choices.length > 0) {
        setChatMessages([...conversation, data.choices[0].message]);
      } else {
        console.error("Invalid API response:", data);
      }

      setInputMessage("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSendMessage();
  }, []);

  return (
    <div>
      <h1>Chat with Assistant</h1>
      <div>
        {chatMessages.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
