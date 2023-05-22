import React from "react";

const Header = () => {
  return (
    <section className="w-full h-40 bg-[darkCyan] bg-[url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1684532111/bg-header-desktop_kczt74.svg')] bg-cover bg-no-repeat bg-center relative flex justify-center">
      <div className="h-20 w-3/5 bg-white absolute top-[100px] rounded-md shadow-lg">
        <h1 className="font-league">Hola</h1>
      </div>
    </section>
  );
};

export { Header };
