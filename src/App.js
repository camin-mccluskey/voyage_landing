import './App.css';
import data from './Data';
import { Card } from './components';
import WhitePaperPdf from './assets/files/voyage_white_paper_test.pdf';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"


function App() {
  const { hero_text, problem_value_cards, core_principles } = data;
  return (
    <div className="App px-8">
      {/* Header */}
      <div className="flex flex-row justify-between py-2">
        <h1 className="text-center cursor-default">
          Voyage
        </h1>
        <a className="py-4 cursor-pointer text-blue-500 underline" href={WhitePaperPdf} target="_blank" rel="noreferrer">White Paper</a>
      </div>
      {/* Hero Value Text */}
      <p className="text-xl text-center py-12">
        {hero_text}
      </p>
      {/* Value Prop Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-auto py-10">
        {problem_value_cards.map((c, idx) => {
          return <Card iconName={c.icon_name} title={c.title} problemText={c.problem_text} solutionText={c.solution_text}/>
        })}
      </div>
      {/* Graph Image */}
      {/* Core Principles */}
      <div className="py-10">
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
      </div>
      {/* Reserve a username */}
      <div className="mx-auto w-fill md:w-2/4 border-2">
        <h3 className="text-center">Reserve a Username</h3>
        // todo
        {/* do it using this - https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9 */}
        <form className="flex flex-col">
          <input type="email" className="text-pink-500" placeholder="email" />
          <input type="text" placeholder="username" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
      {/* Twitch Embed */}
      <div className="py-10">
        <h2 className="text-center">We're Building in Public!</h2>
        <div className="w-full md:w-9/12 mx-auto">
          <ReactTwitchEmbedVideo channel="camin_mccluskey" layout="video" width="100%"/>
        </div>
      </div>
    </div>
  );
}

export default App;
