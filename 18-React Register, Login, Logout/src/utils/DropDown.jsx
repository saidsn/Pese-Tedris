import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function DropDown() {
  const baseUrl = "http://localhost:3000/users";

  const [users, setUsers] = React.useState([]);
  let existUser = users.find((user) => user.isLogined == true);

  let getUsers = async () => {
    let { data } = await axios(baseUrl);
    setUsers(data);
  };

  let Logout = async (id) => {
    if (existUser && id) {
      try {
        await axios.put(`${baseUrl}/${id}`, { ...existUser, isLogined: false });
        toast.success("Logout success");
        getUsers(); 
      } catch (error) {
        toast.error("Logout failed");
      }
    }
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="outlined"
            size="small"
            startIcon={<PersonIcon />}
            {...bindTrigger(popupState)}
            sx={{ textTransform: "none", padding: "2px 5px" }}
          >
            {existUser?.username ?? "profile"}
          </Button>
          <Menu {...bindMenu(popupState)}>
            {existUser ? (
              <MenuItem
                onClick={() => {
                  popupState.close();
                  Logout(existUser?.id);
                }}
              >
                Logout
              </MenuItem>
            ) : (
              <div>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/register"}>Register</Link>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <Link to={"/login"}>Login</Link>
                </MenuItem>
              </div>
            )}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
