import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CheckRoleUser = (jwt) =>{
    const navigate = useNavigate();
    // Check Login and redirect
    if (!jwt) {
        navigate("/login");
    } else {
        // Decode Jwt
        const user = jwtDecode(jwt);

        // Check Role
        if (user.data.role === 1) {
            navigate("/");
          };
    };

    return CheckRoleUser(jwt);
}

export default CheckRoleUser;