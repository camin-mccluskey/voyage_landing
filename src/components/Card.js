import { user, incentives, interactions } from '../assets/icons';


const cardMap = {
  user: {
    icon: user,
    bg_color: "bg-dark-500",
  },
  incentives: {
    icon: incentives,
    bg_color: "bg-dark-500",
  },
  interactions: {
    icon: interactions,
    bg_color: "bg-dark-500",
  },
};

const Card = ({iconName, title, problemText, solutionText}) => {
  return (
    <div className={`${cardMap[iconName].bg_color} border-1 shadow-xl rounded-lg flex flex-col items-center motion-safe:animate-fadeIn p-4`}>
      <img className="stroke-2" src={cardMap[iconName].icon} alt={`${title} icon`} width={60} height={60} />
      <h2 className="text-center font-bold pb-2 text-light-500 tracking-wide">{title}</h2>
      <div>
        <p className="text-left pb-4 text-dark-900">{problemText}</p>
        <p className="text-left text-dark-900">{solutionText}</p>
      </div>
    </div>
  )
};

export default Card;
