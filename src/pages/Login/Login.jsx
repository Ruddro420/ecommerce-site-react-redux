import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
    // Dispatch Data
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    // Login
    const googleHandlerLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }));
                toast.success('Login Successfully!')
                setTimeout(() => {
                    navigate('/')
                }, 1500)
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md card">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login Here</h1>
                            <button onClick={googleHandlerLogin} className="btn btn-primary mt-10">Login With Gmail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;