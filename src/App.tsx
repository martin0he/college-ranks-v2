import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewPage from "./pages/ReviewPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./utils/AuthProvider";
import AccountPage from "./pages/AccountPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import UniversityPage from "./pages/UniversityPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#777C49", // Custom primary color
    },
    secondary: {
      main: "#80727B", // Custom secondary color
    },
    error: {
      main: "#ff1744",
    },
    background: {
      default: "#F9ECEC",
    },
  },
  typography: {
    fontFamily: '"Jost", "Helvetica", "Arial", sans-serif',
    fontSize: 16,

    h1: {
      fontSize: "2.2rem",
    },
    h2: {
      fontSize: "1.8rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/university/:id" element={<UniversityPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
