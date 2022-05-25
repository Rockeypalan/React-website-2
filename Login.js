import React, {useState} from "react";
import axios from 'axios'
import { useHistory, Link} from "react-router-dom";

function Login(){

    //const { id } = useParams();
    let history = useHistory();


    const [details, setDetails] = useState({
        first_name: "",
        last_name: "",
        city: "",
        state: "",
        email: "",
        age: "",
        web: ""
    });

    const { first_name, email} = details;

    const onInputChange = e => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    //const [error, setError] = useState("");

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post(`http://localhost:3003/users`, {
            first_name,
            email
        })
        .then((response) => {
            console.log("response", response);
            localStorage.setItem(
              "login",
              JSON.stringify({
                userLogin: true,
                token: response.data.access_token,
              })
            );
            //setError("");
            setDetails("");
            history.push("/LoginDetail")
          })
          //.catch((error) => setError(error.response.data.message));
    };

    return(
        <div className="container">
            <div className=" w-75 mx-auto shadow p-4">
                <h2 className="text-center mb-4">Login form</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your First Name"
                        name="first_name"
                        value={first_name}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block"> Log In </button>
                </form>
                <div className="pt-3">
                    <h6>Don't have an account please <Link className="h6" to="/Register">
                    Register here
                    </Link> </h6>
                </div>
            </div>
        </div>
    );

}

export default Login;