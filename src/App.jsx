import "./App.css";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
function FormItem({ label, register }) {
  return (
    <div className="flex flex-col gap-2 w-1/2 mx-auto">
      <label htmlFor={label} className="font-semibold">{label}</label>
      <input type="text" id={label} className="bg-blue-100 p-2 rounded-lg border" { ...register } />
    </div>
  );
}

function App() {
  const { register } = useForm();
  // register
  // name, ref, onChange, onBlur
  // const { name, ref, onChange, onBlur } = register("username")
  // <input type="text" id={label} name={name} ref={ref} onChange={onChange} onBlur={onBlur} />
  // it simplified to
  // <input type="text" id={label} { ...register("username") } />
  return (
    <div className="w-1/2 mx-auto my-4 p-8 border rounded-xl">
      <h1 className="text-center text-2xl font-semibold text-blue-500 mb-8">
        Identity Form
      </h1>
      <form action="" className="p-4 flex flex-col gap-4">
        <FormItem label="Name" register={{ ...register("name") }} />
        <FormItem label="Address" register={{ ...register("address") }} />
        <FormItem label="NIM" register={{ ...register("nim") }} />
        <button className="bg-blue-500 text-white py-2 px-4 w-fit rounded-xl mx-auto hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default App;
