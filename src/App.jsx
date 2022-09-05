import {
  Navbar,
  SocialIcons,
  Home,
  About,
  Skills,
  Work,
  Contact,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <SocialIcons />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
