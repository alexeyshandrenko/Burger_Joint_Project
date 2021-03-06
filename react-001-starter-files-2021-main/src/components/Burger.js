import React from "react";
import PropTypes from "prop-types";

const Burger = (props) => {
  const { name, image, desc, price, status } = props.details;
  const isAvailable = status == "available";
  const index = props.index;

  return (
    <li className="menu-burger">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="burger-details">
        <h3 className="burger-name">
          {name}
          <span className="price">{price}₽</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => props.addToOrder(index)}
          className="buttonOrder"
          disabled={!isAvailable}
        >
          {isAvailable ? "Заказать" : "Временно нет"}
        </button>
      </div>
    </li>
  );
};

Burger.propTypes = {
  details: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    status: PropTypes.string,
  }),
  index: PropTypes.string,
  addToOrder: PropTypes.func,
};

// class Burger extends React.Component {
//   static propTypes = {
//     details: PropTypes.shape({
//       image: PropTypes.string,
//       name: PropTypes.string,
//       price: PropTypes.number,
//       desc: PropTypes.string,
//       status: PropTypes.string,
//     }),
//     index: PropTypes.string,
//     addToOrder: PropTypes.func,
//   };

//   render() {
//     const { name, image, desc, price, status } = this.props.details;
//     const isAvailable = status == "available";
//     const index = this.props.index;

//     return (
//       <li className="menu-burger">
//         <div className="image-container">
//           <img src={image} />
//         </div>
//         <div className="burger-details">
//           <h3 className="burger-name">
//             {name}
//             <span className="price">{price}₽</span>
//           </h3>
//           <p>{desc}</p>
//           <button
//             onClick={() => this.props.addToOrder(index)}
//             className="buttonOrder"
//             disabled={!isAvailable}
//           >
//             {isAvailable ? "Заказать" : "Временно нет"}
//           </button>
//         </div>
//       </li>
//     );
//   }
// }

export default Burger;
