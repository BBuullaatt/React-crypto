import AppLayout from "./components/layout/AppLayout";
import { CryproContextProvider } from "./context/crypto-context";

export default function App() {
  return (
    <CryproContextProvider>
      <AppLayout />
    </CryproContextProvider>
  );
}
