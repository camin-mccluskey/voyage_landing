import './App.css';
import { Card } from './components';
import WhitePaperPdf from './assets/files/voyage_white_paper_test.pdf';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="flex flex-row justify-between px-8">
        <p className="text-center">
          Voyage
        </p>
        <a href={WhitePaperPdf} target="_blank">White Paper</a>
      </div>
      {/* Hero Prop */}
      <p>
        Modern social media is not fit for discourse without demonisation 
      </p>
      {/* Value Prop Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card icon="" title="Users" valueProp="Test"/>
        <Card icon="" title="Incentives" valueProp="Test"/>
        <Card icon="" title="Interactions" valueProp="Test"/>
      </div>
      {/* Graph Image */}
      {/* Core Principles */}
      <div>
        <h2>Core Principles</h2>
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
      <div>
        <h3>Reserve a Username</h3>
        <input placeholder="email"></input>
        <input placeholder="username"></input>
      </div>
      {/* Twitch Embed */}
      <div>
        <h3>We're Building in Public</h3>
        {/* embed */}
      </div>

    </div>
  );
}

export default App;
