import { PageIntro } from "../../components/PageIntro";
import { SplashContent } from "../../components/PageContent/SplashPage/SplashContent";

function Splash() {
  return (
    <>
      <PageIntro
        pageTitle='Welcome'
        subText={
          <>
            My name is <span>Joe Burton</span>, I'm a Web Developer.
          </>
        }
        detail='This is my portfolio and online playground.'
      />
      <SplashContent />
    </>
  );
}

export default Splash;
