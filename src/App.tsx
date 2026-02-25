import { Box } from "./components/Box/Box";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <Box>
      <Header/>
      <AppRoutes/>
    </Box>
  );
}

export default App;
