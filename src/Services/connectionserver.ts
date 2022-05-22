import axios from "axios";

interface IUserData {
  name: string;
  password: string;
}

const backendConnection = (userData: IUserData, connectionType: string, setBackendCodeFeedback: (feedback: number) => void) => {
  const url = `${import.meta.env.VITE_BASE_SERVER_URL}${connectionType}`
  axios.post(url, userData)
    .then(response => setBackendCodeFeedback(response.status))
    .catch(error => setBackendCodeFeedback(error.response.request.status))
}

export default backendConnection