import React from 'react'

interface FormProps {
  type: number
  data: Client
  setData: React.Dispatch<React.SetStateAction<Client>>
  onSubmit: () => void
  onCancel: () => void
}

interface Client {
  tecl_nome: string
  tecl_endereco: string
  tecl_cidade: string
  tecl_uf: string
  tecl_telefone: string
}

const Form: React.FC<FormProps> = ({
  type,
  data,
  setData,
  onSubmit,
  onCancel
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target

    setData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form className="mx-auto mt-10 w-full" onSubmit={handleSubmit}>
      <div className="mb-5 flex w-full items-center gap-5">
        <div className="w-[50%]">
          <label
            htmlFor="tecl_nome"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Nome
          </label>
          <input
            type="text"
            id="tecl_nome"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o nome"
            value={data.tecl_nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[50%]">
          <label
            htmlFor="tecl_endereco"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Endereço
          </label>
          <input
            type="text"
            id="tecl_endereco"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o endereço"
            value={data.tecl_endereco}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="mb-5 w-2/5">
          <label
            htmlFor="tecl_cidade"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Cidade
          </label>
          <input
            type="text"
            id="tecl_cidade"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite a cidade"
            value={data.tecl_cidade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5 w-[10%]">
          <label
            htmlFor="tecl_uf"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            UF
          </label>
          <input
            type="text"
            id="tecl_uf"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite a UF"
            value={data.tecl_uf}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5 w-[50%]">
          <label
            htmlFor="tecl_telefone"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Telefone
          </label>
          <input
            type="text"
            id="tecl_telefone"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o telefone"
            value={data.tecl_telefone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          type="submit"
          className="w-full rounded-lg bg-purple-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 sm:w-auto"
        >
          {type === 1 ? 'Criar' : 'Atualizar'}
        </button>

        <button
          type="button"
          className="w-full rounded-lg bg-purple-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 sm:w-auto"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default Form
