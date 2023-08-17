import React, { useState } from "react";

const Child = ({ data, addStudent, updateStudent, deleteStudent }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    imageUrl: "",
    Name: "",
    Age: "",
    Gender: "",
  });
  //edit form input handle
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };
  // edit form handle
  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (editingIndex !== null) {
      const updatedStudent = {
        imageUrl: editFormData.imageUrl,
        Name: editFormData.Name,
        Age: editFormData.Age,
        Gender: editFormData.Gender,
      };
      updateStudent(editingIndex, updatedStudent);
      //   form reset
      setEditingIndex(null);
      setEditFormData({
        imageUrl: "",
        Name: "",
        Age: "",
        Gender: "",
      });
    }
  };

  //   add new card
  const handleAddStudent = () => {
    const newStudent = {
      imageUrl: "path/to/new/image",
      Name: "Name Here...",
      Age: "Add Age Here...",
      Gender: "Gender Here...",
    };
    addStudent(newStudent);
  };
  // cards
  return (
    <div className="container mt-5">
      <button
        className="mb-3 btn btn-primary fw-medium"
        onClick={handleAddStudent}
      >
        Add New Student
      </button>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data?.map((item, id) => (
          <div className="col-lg-3 col-md-6 col-12 mb-3" key={id}>
            <div
              className="card border-0 p-2"
              style={{ boxShadow: "0 0 5px 0px rgba(0,0,0,0.4)" }}
            >
              <img
                src={item.imageUrl}
                className="card-img-top object-fit-contain"
                alt={item.name}
                height={350}
              />
              <div className="card-body">
                <h3 className="card-title">{item.Name}</h3>
                <div>
                  <p>
                    <b>Gender:</b> {item.Gender}
                  </p>
                  <p>
                    <b>Age:</b> {item.Age}
                  </p>
                </div>
                <button
                  className="me-2 px-3 btn btn-primary fw-medium"
                  onClick={() => setEditingIndex(id)}
                >
                  Edit
                </button>
                <button
                  className=" btn px-3 btn-primary fw-medium"
                  onClick={() => deleteStudent(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* form to edit data */}
      {editingIndex !== null && (
        <form
          onSubmit={handleEditSubmit}
          className="d-md-flex justify-content-center align-items-center mt-3 mb-3"
        >
          <input
            type="text"
            name="imageUrl"
            className="form-control p-1 mx-1 mb-2"
            placeholder="Image URL"
            value={editFormData.imageUrl}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="Name"
            className="form-control p-1 mx-1 mb-2"
            placeholder="Name"
            value={editFormData.Name}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="Age"
            className="form-control p-1 mx-1 mb-2"
            placeholder="Age"
            value={editFormData.Age}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="Gender"
            className="form-control p-1 mx-1 mb-2"
            placeholder="Gender"
            value={editFormData.Gender}
            onChange={handleEditChange}
          />
          <button
            className="btn btn-primary text-white fw-medium mb-2"
            type="submit"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default Child;
