import axios from "axios";

// Действие для авторизации пользователя
export const loginUser = (username) => async (dispatch) => {
  try {
    // Здесь вы можете вызвать ваш API для авторизации пользователя.
    // Для примера просто сохраняем имя пользователя.
    dispatch({ type: "LOGIN", payload: username });
  } catch (error) {
    console.error(error);
  }
};

// Действие для получения сообщений (пример)
export const fetchMessages = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/messages");
    dispatch({ type: "FETCH_MESSAGES", payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
