const Card = ({icon, title, problemText, solutionText}) => {
  return (
    <div>
      <img src={icon}/>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{problemText}</p>
      <p className="text-center">{solutionText}</p>
    </div>
  )
};

export default Card;
