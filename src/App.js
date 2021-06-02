import { useForm } from "react-hook-form";
import './App.css';

function App()
{
  const { handleSubmit, register, formState: {errors}, } = useForm();

  const onSubmit = (formData) =>
  {

    console.log(formData);

  }

  console.log(errors);

  return (
    <div className="app">
      <h1>Sign up</h1>
      <h2>Please fill out the following:</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} placeholder="First Name" type="text" />{" "}
        {errors.firstName?.type === 'required' && 'This field is required'}
        <br />
        <input {...register("lastName", { required: true })} placeholder="Last Name" type="text" />{" "}
        {errors.lastName?.type === 'required' && 'This field is required'}
        <br />
        <input {...register("email")} placeholder="Email" type="email" /> <br />
        <input {...register("password")} placeholder="Password" type="password" /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default App;

//https://react-hook-form.com/
