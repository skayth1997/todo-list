const Item = ({ children, className = 'list-group-item' }) => (
  <li className={className}>{children}</li>
);

export default Item;
