import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "serif",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "blue",
  userFontColor: "#fff",
};




 const steps = [
  {
    id: '1',
    message: 'Hello , Sir ! Welcome to Travel.com site ! What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hello , {previousValue} Sir . Nice to meet you! Are you facing any problems?',
    trigger: 'problem',
  },
  {
    id: 'problem',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'askPhone' },
      { value: 'no', label: 'No', trigger: 'endMessage' },
    ],
  },
  {
    id: 'askPhone',
    message: 'Please give me your phone number.',
    trigger: 'phone',
  },
  {
    id: 'phone',
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return 'value should be a number';
      }
      return true;
    },
    trigger: 'sendMessage',
  },
  {
    id: 'sendMessage',
    message:
      "Our support team will be contact you as soon as possible . Any queries, call us at +8801779198286 , +8801879824775",
    end: true,
  },
  {
    id: 'endMessage',
    message: 'Thank you very much, Sir. Keep in touch!',
    end: true,
  },
];

const Chat = () => {
  return (
    <div className="flex justify-center my-14 font-serif text-[16px] mx-2 md:mx-0">
    
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
  );
};

export default Chat;
