import { useState, useEffect, handleSubmit } from "react";

const Contact = ({
  ipLines,
  fxsPorts,
  fxoPorts,
  callCenterAgents,
  concurrentCalls,
  isAcd,
  isCallCenter,
  callRecording,
  pbxModel,
}) => {
  {
    const [isCallCenterEmail, setIsCallCenterEmail] = useState("");

    useEffect(() => {
      if (isCallCenter) {
        setIsCallCenterEmail("Yes");
      } else {
        setIsCallCenterEmail("No");
      }
    }, [isCallCenter]);

    //const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;

      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      }

      setErrors({ ...tempErrors });
      console.log("errors", errors);
      return isValid;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      let isValidForm = handleValidation();

      if (isValidForm) {
        setButtonText("Sending");
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            ipLines: ipLines,
            fxsPorts: fxsPorts,
            fxoPorts: fxoPorts,
            concurrentCalls: concurrentCalls,
            callRecording: callRecording,
            isCallCenter: isCallCenterEmail,
            callCenterAgents: callCenterAgents,
            isAcd: isAcd,
            pbxModel: pbxModel,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Send");
          return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
      }
      console.log(email);
      console.log(ipLines);
      console.log(isCallCenter);
    };

    return (
      <div className="mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 my-20">
        <div>
          {/* <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2> */}
          <p className=" font-light text-center text-gray-500 dark:text-gray-300 text-xl mx-auto mb-10">
            Please enter your email to send us a request for the configuration
            you have created.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto flex">
          <div className="w-[300px]">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="flex justify-center max-h-12 pl-2">
            <button
              type="submit"
              className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
            {showSuccessMessage && (
              <div className="text-xl ml-5 animate-bounce">
                Inquiry received!
              </div>
            )}
            {showFailureMessage && (
              <div className="text-xl ml-5 text-red-500 animate-bounce">
                Message Failed!
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
};

export default Contact;
