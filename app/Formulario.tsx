"use client";

import React, { useState } from "react";

interface FormularioProps {
  usuarios: Usuario[];
}

const Formulario = ({ usuarios }: FormularioProps) => {
  const [seleccionados, setSeleccionados] = useState<boolean[]>(
    new Array(usuarios.length).fill(false)
  );
  const [usuariosSeleccionados, setUsuariosSeleccionados] = useState<Usuario[]>([])

  const manejarCambioCheckbox = (index: number) => {
    const nuevosSeleccionados = [...seleccionados];
    nuevosSeleccionados[index] = !nuevosSeleccionados[index];
    setSeleccionados(nuevosSeleccionados);    
  };

  const mostrarSeleccionados = () => {
    const itemsSeleccionados = usuarios.filter(
      (usuario, index) => seleccionados[index]
    );
    setUsuariosSeleccionados(itemsSeleccionados)
  };

  return (
    <div className="flex mt-5 bg-gray-100 p-5">
      <div className="flex flex-col w-1/2">
        <h1>Seleccionar</h1>
        <ul>
          {usuarios.map((usuario: Usuario, index) => {
            return (
              <li key={usuario.id}>
                <input
                  type="checkbox"
                  id={`checkbox-${usuario.id}`}
                  checked={seleccionados[index]}
                  onChange={() => manejarCambioCheckbox(index)}
                />
                <span className="ml-4">{usuario.id} </span>
                <span className="ml-4">{usuario.nombre}</span>
              </li>
            );
          })}
        </ul>
        <button
          className="btn btn-primary w-1/4 mt-4"
          onClick={mostrarSeleccionados}
        >
          Verificar
        </button>
      </div>
      <div className="flex flex-col w-1/2">
          <h1>Items Seleccionados</h1>
          <ul>
            {usuariosSeleccionados.map((usuario) => { 
                return <li key={usuario.id}>{usuario.nombre}</li>
            })}
          </ul>
      </div>
    </div>
  );
};

export default Formulario;
