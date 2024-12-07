import { ref, push, onValue } from "firebase/database";
import { database } from "../configs/firebaseConfig";

export const sendMessage = async (chatId, message, userId) => {
  const messageRef = ref(database, `chats/${chatId}/messages`);

  await push(messageRef, {
    text: message,
    senderId: userId,
    timestamp: new Date().toISOString(),
  });
};

export const getMessages = (chatId, setMessages) => {
  const messagesRef = ref(database, `chats/${chatId}/messages`);

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const messagesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setMessages(messagesArray);
    }
  });
};
