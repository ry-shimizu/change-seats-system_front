const Button = ({ color, message }: { color: string; message: string }) => {
  return (
    <div className="justify-end flex px-6">
      <button
        className={`bg-${color}-500 py-1 px-3 border-2 ml-2 border-${color}-500 rounded-md text-white`}
      >
        {message}
      </button>
    </div>
  );
};

export default Button;
