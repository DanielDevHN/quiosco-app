import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const NavBar = () => {

  const router = useRouter();

  const calcularProgreso = () => {
    let progreso
    if (router.pathname === "/") {
        progreso = 10
        }
    if (router.pathname === "/resumen") {
        progreso = 50
        }
    if (router.pathname === "/total") {
        progreso = 100
        }
    return progreso

  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
            }}
            className="text-2xl font-bold"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs 
        leading-none h-2 text-center text-white"
            style={{ width:`${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default NavBar;
