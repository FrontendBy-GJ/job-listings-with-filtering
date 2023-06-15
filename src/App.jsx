import mobileBG from './assets/bg-header-mobile.svg';
import desktopBG from './assets/bg-header-desktop.svg';
import Jobs from './components/Jobs';
import JobContextProvider from './context/JobContext';
import useJobContext from './hooks/useJobContext';
import Filters from './components/Filters';

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] bg-Neutral-Light-Cyan-BG">
      <div className="bg-Primary-Dark-Cyan">
        <picture>
          <source media="(min-width: 640px)" srcSet={desktopBG} />
          <img src={mobileBG} alt="" className="w-full" />
        </picture>
      </div>
      <JobContextProvider>
        <Content />
      </JobContextProvider>
    </div>
  );
}

function Content() {
  const { filters } = useJobContext();
  return (
    <>
      {filters.length !== 0 && <Filters />}
      <Jobs />
    </>
  );
}

export default App;
