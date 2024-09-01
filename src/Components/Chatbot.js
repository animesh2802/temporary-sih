import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'YOUR_GEMINI_API_KEY';  // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

const Chatbot = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserInput = async () => {
        if (inputText.trim() === '') return;

        // Add user message to chat history
        const userMessage = { type: 'user', text: inputText };
        setChatHistory([...chatHistory, userMessage]);

        // Call the Gemini API to get a response
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
            const result = await model.generateContent({ prompt: inputText });
            const botResponse = result?.text || 'No response available.';
            setChatHistory((prevHistory) => [...prevHistory, { type: 'bot', text: botResponse }]);
        } catch (error) {
            console.error('Error fetching response from Gemini API:', error);
            setChatHistory((prevHistory) => [...prevHistory, { type: 'bot', text: 'Sorry, something went wrong.' }]);
        }

        // Clear input field
        setInputText('');
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                {chatHistory.map((message, index) => (
                    <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask me anything..."
                />
                <button onClick={handleUserInput}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;