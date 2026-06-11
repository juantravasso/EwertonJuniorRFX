import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import { Box } from "./components/Box/Box";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <Box>
      <Header />

      <AppRoutes />

      <Analytics />
      <SpeedInsights />
    </Box>
  );
}

export default App;