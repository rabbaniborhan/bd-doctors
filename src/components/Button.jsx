const Button = (props) => {
  return (
    <div>
      <button className="bg-primary-light text-white font-semibold hover:bg-primary-deep px-4 rounded-md py-1">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
