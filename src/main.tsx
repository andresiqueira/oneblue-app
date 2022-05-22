import ReactDOM from 'react-dom/client'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import PasswordRecovery from './Pages/PasswordRecovery';
import UsernameRecovery from './Pages/UsernameRecovery'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
          <Route index element={<SignIn />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="usernamerecovery" element={<UsernameRecovery />} />
        <Route path="passwordrecovery" element={<PasswordRecovery />} />
      </Routes>
    </BrowserRouter>
)
