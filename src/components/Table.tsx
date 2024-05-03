import { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "services/api";

interface Client {
  TECL_ID: number;
  TECL_NOME: string;
  TECL_ENDERECO: string;
  TECL_CIDADE: string;
  TECL_UF: string;
  TECL_TELEFONE: string
}
function Table({ data }: { data: Client[]}) {
  const history = useHistory();

  const handleDelete = async (id: number) => {
    try {
      await api.post(`/teste/cliente/${id}`, {
        data
      });

      return true;
    } catch (error) {
      console.error('Erro ao remover cliente:', error);
      return false;
    }
  };

  return (
    <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-purple-200">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      <button
                        onClick={() => history.push("/create")}
                      >ADD</button>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nome
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Endereço
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Cidade
                    </th>
                    <th scope="col" className="px-6 py-3">
                        UF
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Telefone
                    </th>
                </tr>
            </thead>
            <tbody>
              {data.map((client) => (
                <tr key={client.TECL_ID} className="bg-white border-b">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <button
                      className="mr-8"
                      type="button"
                      onClick={() => handleDelete(client.TECL_ID)}
                    >excluir</button>
                    <button
                      onClick={() => history.push(`/update/${client.TECL_ID}`)}
                    >editar</button>
                  </td>
                  <td className="px-6 py-4">{client.TECL_NOME}</td>
                  <td className="px-6 py-4">{client.TECL_ENDERECO}</td>
                  <td className="px-6 py-4">{client.TECL_CIDADE}</td>
                  <td className="px-6 py-4">{client.TECL_UF}</td>
                  <td className="px-6 py-4">{client.TECL_TELEFONE}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
