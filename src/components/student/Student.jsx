import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDateformApi,
  handleDeleteData,
  handleEditData,
  handleSendData,
} from "../../redux/studentReducer/action";

const Student = () => {
  const [input, setInput] = useState({
    name: "",
    roll: "",
    email: "",
    photo: "",
  });
  const [editMode, setEditMode] = useState(true);
  const dispach = useDispatch();
  const { students } = useSelector((state) => state.student);

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(input);
  };
  // Create and update date to server
  const handleSubmitFrom = (e) => {
    e.preventDefault();
    if (!editMode) {
      dispach(handleEditData(input));
      if (!input.value) {
        return console.log("error");
      }
    } else {
      dispach(handleSendData(input));
    }

    setEditMode(true);
    setInput({
      name: "",
      roll: "",
      email: "",
      photo: "",
    });
  };

  // Edit data handler
  const handleEdit = (item) => {
    setInput(item);
    setEditMode(false);
  };
  // Deleted data from api
  const handleDeletedData = (id) => {
    dispach(handleDeleteData(id));
  };

  useEffect(() => {
    dispach(getDateformApi());
  }, []);
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="from">
            <form action="" className=" d-flex" onSubmit={handleSubmitFrom}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={input.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="roll"
                placeholder="Roll"
                value={input.roll}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                value={input.photo}
                onChange={handleInputChange}
              />
              <button className="btn btn-sm btn-primary" type="submit">
                {editMode ? "create " : "update"}
              </button>
            </form>
          </div>
          <table className="table table-striped border">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Email</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0
                ? students.map((item, index) => (
                    <tr className="align-middle" key={index}>
                      <th>{index}</th>
                      <td>
                        <img
                          style={{
                            width: "60px",
                            height: "60",
                            borderRadius: "50%",
                          }}
                          src={item.photo}
                          alt=""
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.roll}</td>
                      <td>{item.email}</td>
                      <td>
                        <button className="btn btn-sm btn-primary">view</button>
                        <button
                          className="btn btn-sm btn-warning mx-2"
                          onClick={() => handleEdit(item)}
                        >
                          edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeletedData(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : "No data found"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
