import { FolderPlus, Pencil, Trash } from 'phosphor-react'
import { useHistory } from 'react-router-dom'
import { api } from 'services/api'

interface Client {
  TECL_ID: number
  TECL_NOME: string
  TECL_ENDERECO: string
  TECL_CIDADE: string
  TECL_UF: string
  TECL_TELEFONE: string
}
function Table({
  data,
  handleGetAllClients
}: {
  data: Client[]
  handleGetAllClients: () => void
}) {
  const history = useHistory()

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/teste/cliente/${id}`)

      return true
    } catch (error) {
      console.error('Erro ao remover cliente:', error)
      return false
    }
  }

  return (
    <div className="relative mt-10 overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right ">
        <thead className="bg-purple-200 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              <button onClick={() => history.push('/create')}>
                <FolderPlus size={30} />
              </button>
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
            <tr key={client.TECL_ID} className="border-b bg-white">
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                <button
                  className="mr-8"
                  type="button"
                  onClick={async () => {
                    await handleDelete(client.TECL_ID)
                    await handleGetAllClients()
                  }}
                >
                  <Trash size={28} />
                </button>
                <button
                  onClick={() => history.push(`/update/${client.TECL_ID}`)}
                >
                  <Pencil size={28} />
                </button>
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
