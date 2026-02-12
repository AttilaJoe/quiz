import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import ProtectedRoute from "./routes/potectedroutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
