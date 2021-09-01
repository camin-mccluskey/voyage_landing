const UsernameReservation = () => {
  return (
    <div className="mx-auto w-fill md:w-2/4 shadow-xl p-4 bg-mid_dark-500 rounded-lg">
      <h3 className="text-center font-bold pb-2 text-light-500">Reserve a Username</h3>
      {/* do it using this - https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9 */}
      <form className="flex flex-col gap-4 items-center">
        <div className="flex flex-row w-full">
          <span className="invisible">@</span>
          <input 
            type="email" 
            className="w-full border-0 border-b-2 bg-mid_dark-500 focus:ring-0 border-gray-100 focus:border-light-500 placeholder-gray-500 text-dark-800" 
            placeholder="Email"
            required 
          />
        </div>
        <div className="flex flex-row w-full">
          <span className="self-center text-dark-900">@</span>
          <input 
            type="text"
            className="w-full border-0 border-b-2 bg-mid_dark-500 focus:ring-0 border-gray-100 focus:border-light-500 placeholder-gray-500 text-dark-800"
            placeholder="Username"
            required
          />
        </div>
        <input type="submit" className="rounded-xl w-1/3 py-2 hover:bg-light-500" value="Submit"/>
      </form>
    </div>
  );
};

export default UsernameReservation;
