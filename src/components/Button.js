const Button = ({ text, handleClick }) => {
  return (
    <button onClick={() => handleClick(text)}>{text ? text : 'Click'}</button>
  );
};

export default Button;
