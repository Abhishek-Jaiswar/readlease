import { useState } from "react";

const InputBox = ({ icon, name, type, id, value, placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="relative w-[100%] mb-4">
      <input
        className="input-box"
        id={id}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        name={name}
        defaultValue={value}
        placeholder={placeholder}
      />
      
      <i className={"fi " + icon + " input-icon"}></i>

      {type == "password" ? (
        <i
          className={`fi fi-rr-eye${
            !passwordVisible ? "-crossed" : ""
          } input-icon left-[auto] cursor-pointer right-4`}
          onClick={() => setPasswordVisible((prev) => !prev)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
