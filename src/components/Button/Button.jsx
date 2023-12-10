const Button = ({ onLoadMore, hasMoreImages }) => {
  return (
    hasMoreImages && (
      <button className="Button" type="button" onClick={onLoadMore}>
        Load more
      </button>
    )
  );
};

export default Button;
