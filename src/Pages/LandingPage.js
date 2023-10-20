import {
  NavBar,
  Title,
  CenteredText,
  Figures,
  Conversation,
  Footer
} from "../components";
import { CenteredText2 } from "../components/LandingPage/CenteredText2/CenteredText2";

export function LandingPage () {
  return (
    <div className="root">
      <header>
        <NavBar />
      </header>
      <Title />
      <CenteredText />
      <Figures />
      <Conversation />
      <CenteredText2 />
      <Footer />
    </div>
  );
}

