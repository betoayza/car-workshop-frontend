import React from "react";

export const DeleteCar = ({ code, setModal }) => {
  const [deleted, setDeleted] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  useEffect(() => {
    const deleteCar = async () => {
      if (confirm("Are you sure you want to delete?") == true) {      
        const options = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            Accept: "application/json",
            timeout: 3000,
          },
          data: { code },
        };

        await axios
          .delete(`${API}/cars/delete`, options)
          .then((res) => {
            console.log(res.data);
            if (res.data) setDeleted(true)
            else setDeleted(false);
          })
          .catch((error) => error);
      } else alert("Delete aborted.");
    };
    deleteCar();
  }, []);

  return deleted ? (
    <div>
      <h2>Update succesful!</h2>
      <button className={"btn btn-danger"} type={"reset"} onClick={handleClose}>
        Close
      </button>
    </div>
  ) : (
    <h2>Can't Delete :(</h2>
  );
};
