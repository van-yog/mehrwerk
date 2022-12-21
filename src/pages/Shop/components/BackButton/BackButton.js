import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/shops');

  return (
    <button className="back_button" onClick={handleClick}>
      <span>{`<`}</span> Back
    </button>
  );
};

export default BackButton;
