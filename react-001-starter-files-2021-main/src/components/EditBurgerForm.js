import React from "react";
import PropTypes from "prop-types";

const EditBurgerForm = (props) => {
  const { name, price, status, desc, image } = props.burger;

  const handleChange = (event) => {
    const updatedBurger = {
      ...props.burger,
      [event.currentTarget.name]:
        event.currentTarget.name === "price"
          ? parseFloat(event.currentTarget.value)
          : event.currentTarget.value,
    };
    props.updateBurger(props.index, updatedBurger);
  };

  return (
    <div className="burger-edit">
      <input onChange={handleChange} name="name" type="text" value={name} />
      <input onChange={handleChange} name="price" type="text" value={price} />
      <select
        onChange={handleChange}
        name="status"
        className="status"
        value={status}
      >
        <option value="available">Доступно</option>
        <option value="unavailable">Не доступно</option>
      </select>
      <textarea onChange={handleChange} name="desc" value={desc} />
      <input onChange={handleChange} name="image" type="text" value={image} />
      <button onClick={() => props.deleteBurger(props.index)}>
        Удалить из меню
      </button>
    </div>
  );
};

EditBurgerForm.propTypes = {
  deleteBurger: PropTypes.func,
  updateBurger: PropTypes.func,
  index: PropTypes.string,
  burger: PropTypes.shape({
    desc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string,
  }),
};

// class EditBurgerForm extends React.Component {
//   static propTypes = {
//     deleteBurger: PropTypes.func,
//     updateBurger: PropTypes.func,
//     index: PropTypes.string,
//     burger: PropTypes.shape({
//       desc: PropTypes.string,
//       image: PropTypes.string,
//       name: PropTypes.string,
//       price: PropTypes.number,
//       status: PropTypes.string,
//     }),
//   };

//   handleChange = (event) => {
//     const updatedBurger = {
//       ...this.props.burger,
//       [event.currentTarget.name]:
//         event.currentTarget.name === "price"
//           ? parseFloat(event.currentTarget.value)
//           : event.currentTarget.value,
//     };
//     this.props.updateBurger(this.props.index, updatedBurger);
//   };

//   render() {
//     const { name, price, status, desc, image } = this.props.burger;
//     return (
//       <div className="burger-edit">
//         <input
//           onChange={this.handleChange}
//           name="name"
//           type="text"
//           value={name}
//         />
//         <input
//           onChange={this.handleChange}
//           name="price"
//           type="text"
//           value={price}
//         />
//         <select
//           onChange={this.handleChange}
//           name="status"
//           className="status"
//           value={status}
//         >
//           <option value="available">Доступно</option>
//           <option value="unavailable">Не доступно</option>
//         </select>
//         <textarea onChange={this.handleChange} name="desc" value={desc} />
//         <input
//           onChange={this.handleChange}
//           name="image"
//           type="text"
//           value={image}
//         />
//         <button onClick={() => this.props.deleteBurger(this.props.index)}>
//           Удалить из меню
//         </button>
//       </div>
//     );
//   }
// }

export default EditBurgerForm;
