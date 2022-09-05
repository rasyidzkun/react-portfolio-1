const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-8 sm:mt-48 mt-28"
    >
      <form
        method="POST"
        action={import.meta.env.VITE_ENDPOINT}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-[#c27dfc] text-gray-200">
            Contact
          </h1>
          <p className="text-[#8892b0] py-4">
            Submit the form below or shoot me an email - kucingscript@gmail.com
          </p>
        </div>
        <input
          className="bg-[#eaebed] p-4 focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-4 bg-[#eaebed] focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#eaebed] p-4 focus:outline-none"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#c27dfc] hover:border-[#c27dfc] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
