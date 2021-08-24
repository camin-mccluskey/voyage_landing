import './App.css';
import data from './Data';
import { Card, UsernameReservation } from './components';
import WhitePaperPdf from './assets/files/voyage_white_paper_test.pdf';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";


function App() {
  const { hero_text, problem_value_cards, core_principles } = data;
  return (
    <div className="App px-8 bg-gradient-to-br from-primary-500 to-dark-500">
      {/* Header */}
      <div className="flex flex-row justify-between py-2">
        <h1 className="text-center cursor-default text-light-500">
          Voyage
        </h1>
        <a className="py-2 cursor-pointer text-light-500 underline" href={WhitePaperPdf} target="_blank" rel="noreferrer">White Paper</a>
      </div>
      {/* Hero Value Text */}
      <p className="text-center py-12 md:py-24 text-2xl md:text-4xl font-bold tracking-wide w-4/5 md:w-2/3 mx-auto text-gray-300">
        {hero_text}
      </p>
      {/* Value Prop Cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mx-auto pt-8 pb-32">
        {problem_value_cards.map((c, idx) => {
          return <Card iconName={c.icon_name} title={c.title} problemText={c.problem_text} solutionText={c.solution_text} />
        })}
      </div>
      {/* Graph Image */}
      {/* Core Principles - omit */}
      {/* <div className="py-10">
        <h2 className="py-2 underline">Core Principles</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {core_principles.map((p, idx) => {
            return (
                <div className="border-2 p-4 md:w-2/12 xs:w-1/3">
                  <p className="text-center">{p}</p>
                </div>
            )
          })}
        </div>
      </div> */}
      {/* Visual Divider */}
      {/* <div className="w-full h-0.5 bg-mid_dark-500 my-20"/> */}
      {/* Reserve a username */}
      <UsernameReservation />
      {/* Twitch Embed */}
      <div className="pt-32 pb-8">
        <h2 className="text-center text-dark-900 font-bold tracking-wide py-8">We're Building in Public!</h2>
        <div className="w-full md:w-9/12 mx-auto">
          <ReactTwitchEmbedVideo channel="camin_mccluskey" layout="video" width="100%"/>
        </div>
      </div>
    </div>
  );
}

export default App;
