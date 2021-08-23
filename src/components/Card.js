import user from '../assets/icons/user.svg';
import incentives from '../assets/icons/incentives.svg';
import interactions from '../assets/icons/interactions.svg';

const nameMap = {
  "user": user,
  "incentives": incentives,
  "interactions": interactions,
};

// todo - get animation working: https://dev.to/tomdohnal/react-svg-animation-with-react-spring-3-3c91
const Card = ({iconName, title, problemText, solutionText}) => {
  return (
    <div className="border-1 shadow rounded-lg flex flex-col items-center motion-safe:animate-fadeIn p-4">
      <img src={nameMap[iconName]} alt={`${title} icon`} width={50} height={50}/>
      <h3 className="text-center font-bold pb-2">{title}</h3>
      <p className="text-center pb-4 text-red-500">{problemText}</p>
      <p className="text-center text-green-900">{solutionText}</p>
    </div>
  )
};

export default Card;
