import "./App.css";

// eslint-disable-next-line react/prop-types
function FormItem({ label }) {
  return (
    <div className="flex flex-col gap-2 w-1/2 mx-auto">
      <label htmlFor={label} className="font-semibold">{label}</label>
      <input type="text" id={label} className="bg-blue-100 p-2 rounded-lg border" />
    </div>
  );
}

function App() {
  return (
    <div className="w-1/2 mx-auto my-4 p-8 border rounded-xl">
      <h1 className="text-center text-2xl font-semibold text-blue-500 mb-8">
        Identity Form
      </h1>
      <form action="" className="p-4 flex flex-col gap-4">
        <FormItem label="Name" />
        <FormItem label="Address" />
        <FormItem label="NIM" />
        <button className="bg-blue-500 text-white py-2 px-4 w-fit rounded-xl mx-auto hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default App;
