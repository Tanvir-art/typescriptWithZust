import { Link, useNavigate } from "react-router-dom"
import supabase from "../../Config/Config";
import useTodoStore from "../../Store/Store";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate()

  // Ensure the store is initialized before using it
  const addUser = useTodoStore((state) => state.addUser)
  const user = useTodoStore((state) => state.user)
 

  useEffect(() => {
    // This will log the updated user state after addUser is called
    console.log(user);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLFormElement).value;
    const password = (form.elements.namedItem("password") as HTMLFormElement).value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      addUser(data.user)
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen border ">
      <h2 className="text-center text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit} className=" w-1/2  py-10" action="">
        <div className="py-4">
          <label className="text-lg font-medium" htmlFor="">
            Email:
          </label>
          <input
            className="w-full border-2 focus:outline-none focus:border-[#07B5D5] py-1"
            type="email"
            name="email"
          />
        </div>

        <div className="">
          <label className="text-lg font-medium" htmlFor="">
            Password:
          </label>
          <input
            className="w-full border-2 focus:outline-none focus:border-[#07B5D5] py-1"
            type="password"
            name="password"
          />
        </div>

        <div className="flex justify-center py-4 text-white">
          <button className="px-4 py-2 bg-[#07B5D5] rounded">Login</button>
        </div>
      </form>

      <p>Did not signup? 
      <Link to={"/signup"}>
        <span>Signup</span>
      </Link>
      </p>
    </div>
  )
}

export default Login
