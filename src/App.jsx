import mobileBG from './assets/bg-header-mobile.svg';
import desktopBG from './assets/bg-header-desktop.svg';

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px]">
      <div className="bg-Primary-Dark-Cyan">
        <picture>
          <source media="(min-width: 640px)" srcSet={desktopBG} />
          <img src={mobileBG} alt="" className="w-full" />
        </picture>
      </div>
    </div>
  );
}

export default App;
