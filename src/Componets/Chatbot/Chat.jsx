
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Define a custom theme
// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Arial',
//   headerBgColor: '#00bfff',
//   headerFontColor: '#fff',
//   headerFontSize: '15px',
//   botBubbleColor: '#00bfff',
//   botFontColor: '#fff',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };

// Define the steps for the chatbot
const steps = [
  {
    id: '1',
    message: 'Welcome to Travel & Tour Accommodations! How can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'booking', label: 'Help with booking', trigger: 'bookingHelp' },
      { value: 'services', label: 'Information about services', trigger: 'servicesInfo' },
      { value: 'support', label: 'Contact support', trigger: 'supportInfo' },
    ],
  },
  {
    id: 'bookingHelp',
    message: 'You can book by visiting the "Book Now" section on our website.',
    end: true,
  },
  {
    id: 'servicesInfo',
    message: 'We offer a variety of services including guided tours, accommodations, and travel packages.',
    end: true,
  },
  {
    id: 'supportInfo',
    message: 'You can contact our support team at support@travel.com or call +123456789.',
    end: true,
  },
];

// Chatbot component
const Chat = () => {
  return (
    // <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    // </ThemeProvider>
  );
};

export default Chat;
