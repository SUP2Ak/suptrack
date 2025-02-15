import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppShell, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import Navigation from "./components/Navigations";

function App() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Router>
      <AppShell
        padding="md"
        header={{ height: 26 }}
        navbar={{ 
          width: 120,
          breakpoint: "xs",
          collapsed: { desktop: !opened, mobile: !opened }
        }}
      >
        <AppShell.Header>
          <Burger
            opened={opened}
            onClick={toggle}
            size="xs"
            ml="xs"
          />
        </AppShell.Header>
        <AppShell.Navbar>
          <Navigation />
        </AppShell.Navbar>
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </Router>
  );
}

export default App;
