import { DataProvider } from "./context/DataContext"
import AppRouter from "./routers/AppRouter"


function App() {
  return (
    <DataProvider>
      <AppRouter/>
    </DataProvider>
  )
}

export default App
