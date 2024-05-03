import Header from 'components/Header'
import Table from 'components/Table'
import { useMemo, useState } from 'react'
import { api } from 'services/api'

interface Client {
  TECL_ID: number
  TECL_NOME: string
  TECL_ENDERECO: string
  TECL_CIDADE: string
  TECL_UF: string
  TECL_TELEFONE: string
}

function Home() {
  const [data, setData] = useState<Client[]>([])
  const [search, setSearch] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }

  const handleGenerateToken = async () => {
    try {
      const response = await api.post('/generate/token')
      const { token } = response.data

      localStorage.setItem('token', token)

      return true
    } catch (error) {
      console.error('Erro ao fazer gerar token:', error)
      return false
    }
  }

  const handleGetAllClients = async () => {
    try {
      const response = await api.get('/teste/clientes')
      const { data } = response.data

      setData(data)
    } catch (error) {
      console.error('Erro ao buscar clientes: ', error)
      return false
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const handleSearch = async (event: any) => {
    event.preventDefault()

    try {
      const response = await api.get(`/teste/clientes?search=${search}`)
      const { data } = response.data
      setData(data)
    } catch (error) {
      console.error('Erro ao buscar clientes:', error)
    }
  }

  useMemo(async () => {
    await handleGenerateToken()
    await handleGetAllClients()
  }, [])

  console.log('data', data)

  return (
    <>
      <Header title="Titulo" />

      <main className="flex w-full flex-col items-center">
        <div className="w-4/5">
          <form className="mx-auto mt-10 flex w-full" onSubmit={handleSearch}>
            <div className="mb-5 w-full items-center gap-5">
              <div className="mb-5 w-[50%]">
                <label
                  htmlFor="tecl_nome"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Pesquisar
                </label>
                <input
                  type="text"
                  id="tecl_nome"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Digite o nome"
                  value={search}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Pesquisar
              </button>
            </div>
          </form>
          <Table data={data} handleGetAllClients={handleGetAllClients} />
        </div>
      </main>
    </>
  )
}

export default Home
