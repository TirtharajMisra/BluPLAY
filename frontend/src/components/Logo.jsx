import React from "react";

function Logo({ className, inline = false, mobile = false }) {
  return (
    <div
      className={`font-extrabold text-xl flex items-center justify-center w-full ${className} text-blue-500`}
    >
      <img
        src="/bluplay-icon.jpeg"
        alt="logo"
        className="w-10 h-10 inline-block mr-2"
      />

      <div
        className={`flex ${inline ? "flex-row" : " flex-col"} ${
          mobile && "hidden md:block"
        }`}
      >
        <div>Blu</div>
        <div>Play</div>
      </div>
    </div>
  );
}

export default Logo;
