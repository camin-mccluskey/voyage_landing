import user from '../assets/icons/user.svg';
import incentives from '../assets/icons/incentives.svg';
import interactions from '../assets/icons/interactions.svg';

// todo - finish mapping names once I have svg files
const nameMap = {
  "user": user,
  "incentives": incentives,
  "interactions": interactions,
};

const Card = ({iconName, title, problemText, solutionText}) => {
  console.log(iconName)
  return (
    <div className="border-2 shadow rounded-lg flex flex-col items-center">
      <img src={nameMap[iconName]} alt={`${title} icon`} width={50} height={50}/>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{problemText}</p>
      <p className="text-center">{solutionText}</p>
    </div>
  )
};

export default Card;
