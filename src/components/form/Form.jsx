import {React} from 'react'

function Form(){
    return(
        <>
        <section>
           <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-96 p-6 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center mb-5">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Login
        </button>
      </div>

    </div>
        </section>
        </>
    );
};
export default Form;