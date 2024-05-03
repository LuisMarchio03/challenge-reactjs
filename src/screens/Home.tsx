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

  useMemo(async () => {
    await handleGenerateToken()
    await handleGetAllClients()
  }, [])

  return (
    <>
      <Header title="Titulo" />

      <main className="flex w-full justify-center">
        <div className="w-4/5">
          <Table data={data} handleGetAllClients={handleGetAllClients} />
        </div>
      </main>
    </>
  )
}

export default Home
