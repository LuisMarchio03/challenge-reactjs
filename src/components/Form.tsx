import React from 'react';

interface FormProps {
  type: number;
  data: Client;
  setData: React.Dispatch<React.SetStateAction<Client>>;
  onSubmit: () => void;
  onCancel: () => void;
}

interface Client {
  tecl_nome: string;
  tecl_endereco: string;
  tecl_cidade: string;
  tecl_uf: string;
  tecl_telefone: string;
}

const Form: React.FC<FormProps> = ({ type, data, setData, onSubmit, onCancel }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="w-full mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="flex items-center gap-5 mb-5">
        <div>
          <label htmlFor="tecl_nome" className="block mb-2 text-sm font-medium text-gray-900">
            Nome
          </label>
          <input
            type="text"
            id="tecl_nome"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Digite o nome"
            value={data.tecl_nome}
            onChange={handleChange}
            readOnly={type === 2}
            required
          />
        </div>
        <div>
          <label htmlFor="tecl_endereco" className="block mb-2 text-sm font-medium text-gray-900">
            Endereço
          </label>
          <input
            type="text"
            id="tecl_endereco"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Digite o endereço"
            value={data.tecl_endereco}
            onChange={handleChange}
            readOnly={type === 2}
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="mb-5">
          <label htmlFor="tecl_cidade" className="block mb-2 text-sm font-medium text-gray-900">
            Cidade
          </label>
          <input
            type="text"
            id="tecl_cidade"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Digite a cidade"
            value={data.tecl_cidade}
            onChange={handleChange}
            readOnly={type === 2}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="tecl_uf" className="block mb-2 text-sm font-medium text-gray-900">
            UF
          </label>
          <input
            type="text"
            id="tecl_uf"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Digite a UF"
            value={data.tecl_uf}
            onChange={handleChange}
            readOnly={type === 2}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="tecl_telefone" className="block mb-2 text-sm font-medium text-gray-900">
            Telefone
          </label>
          <input
            type="text"
            id="tecl_telefone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Digite o telefone"
            value={data.tecl_telefone}
            onChange={handleChange}
            readOnly={type === 2}
            required
          />
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <button
          type="submit"
          className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {type === 1 ? 'Criar' : 'Atualizar'}
        </button>

        <button
          type="button"
          className="text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default Form;
