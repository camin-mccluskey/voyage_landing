import './App.css';
import data from './Data';
import { Card } from './components';
import WhitePaperPdf from './assets/files/voyage_white_paper_test.pdf';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import { forEach } from 'lodash';


function App() {
  const { hero_text, problem_value_cards, core_principles } = data;
  return (
    <div className="App px-8">
      {/* Header */}
      <div className="flex flex-row justify-between py-2">
        <h1 className="text-center">
          Voyage
        </h1>
        <a href={WhitePaperPdf} target="_blank">White Paper</a>
      </div>
      {/* Hero Value Text */}
      <p className="text-xl text-center py-12">
        {hero_text}
      </p>
      {/* Value Prop Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto py-10">
        {problem_value_cards.map((c, idx) => {
          return <Card icon={c.icon} title={c.title} problemText={c.problem_text} solutionText={c.solution_text}/>
        })}
      </div>
      {/* Graph Image */}
      {/* Core Principles */}
      <div className="py-10">
        <h2 className="py-2">Core Principles</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <div>
            <p>We listen to understand, not to reply</p>
          </div>
          <div>
            <p>We speak to each other, not past</p>
          </div>
          <div>
            <p>We reward authentic conversations, not hot takes</p>
          </div>
          <div>
            <p>We treat individuals with respect, but their ideas with scrutiny</p>
          </div>
          <div>
            <p>We promote a sensible level of conspiracy theorizing</p>
          </div>
        </div>
      </div>
      {/* Reserve a username */}
      <div className="mx-auto w-2/4 border-2">
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
        <div className="w-screen md:w-9/12 mx-auto">
          <ReactTwitchEmbedVideo channel="camin_mccluskey" layout="video" width="100%"/>
        </div>
      </div>
    </div>
  );
}

export default App;
