const Card = ({icon, title, problemText, solutionText}) => {
  return (
    <div className="border-2 shadow rounded-lg flex flex-col items-center">
      <img src={icon} alt={`${title} icon`}/>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{problemText}</p>
      <p className="text-center">{solutionText}</p>
    </div>
  )
};

export default Card;
