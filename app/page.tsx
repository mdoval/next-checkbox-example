import Formulario from "./Formulario";

export default function Home() {
  const datos: Usuario[] = [
    {id: 1, nombre: "Juan"},
    {id: 2, nombre: "Paco"},
    {id: 3, nombre: "Pedro"},
    {id: 4, nombre: "Martin"}
  ];

  return (
    <div className="p-5">
      <h1>Example CheckBox</h1>
      <Formulario usuarios={datos} />
    </div>
  )
}
