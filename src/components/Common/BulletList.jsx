import './BulletList.css';

const BulletList = ({ 
  items = [],
  twoColumns = false,
  className = "",
  itemClassName = ""
}) => {
  const listClass = `qc-bullet-list ${twoColumns ? 'qc-bullet-list-two-columns' : ''} ${className}`;
  
  return (
    <ul className={listClass}>
      {items.map((item, index) => (
        <li key={index} className={`qc-bullet-list-item ${itemClassName}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;

