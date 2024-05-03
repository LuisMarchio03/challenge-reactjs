import Form from 'components/Form'
import Header from 'components/Header'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from 'services/api'

interface Client {
  tecl_nome: string
  tecl_endereco: string
  tecl_cidade: string
  tecl_uf: string
  tecl_telefone: string
}

function Create() {
  const history = useHistory()

  const [data, setData] = useState<Client>({
    tecl_cidade: '',
    tecl_endereco: '',
    tecl_nome: '',
    tecl_telefone: '',
    tecl_uf: ''
  })

  const handleSubmit = async () => {
    try {
      await api.post('/teste/cliente', {
        ...data
      })

      history.push('/')
      return true
    } catch (error) {
      console.error('Erro ao criar cliente:', error)
      return false
    }
  }

  return (
    <>
      <Header title="Adicionar cliente" goBack={() => history.goBack()} />

      <main className="flex w-full justify-center">
        <div className="flex w-4/5 items-center justify-center">
          <Form
            type={1}
            data={data}
            setData={setData}
            onSubmit={handleSubmit}
            onCancel={() => history.goBack()}
          />
        </div>
      </main>
    </>
  )
}

export default Create
