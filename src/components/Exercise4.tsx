import React, { useState } from "react";

export const Exercise4 = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  //AYUDA: colores de botones
  //CSS red y disabled rgba(255, 0, 0, 0.5)
  //TAILWIND blue-700 y disabled to-blue-400

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <div>
        <video controls width="500px" style={{ marginTop: 5 }}>
          <source src="video.webm" type="video/webm" />
        </video>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <button
          style={{
            backgroundColor: disabled ? "rgba(255, 0, 0, 0.5)" : "red",
            borderRadius: "8px",
            border: "none",
            textAlign: "center",
            padding: "12px",
            textDecoration: "none",
            fontSize: "16px",
            marginTop: 2,
          }}
          disabled={!disabled}
          onClick={handleDisabled}
        >
          CSS
        </button>

        <button
          className={` h-10 px-6 rounded-md bg-${
            !disabled ? "to-blue-400" : "blue-700"
          }  text-white `}
          type="submit"
          onClick={handleDisabled}
          disabled={disabled}
        >
          Tailwind
        </button>
      </div>
    </div>
  );
};
