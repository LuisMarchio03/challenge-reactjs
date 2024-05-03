import Form from "components/Form";
import Header from "components/Header"
import { useMemo, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { api } from "services/api";

interface Client {
  tecl_id?: string | null;
  tecl_nome: string;
  tecl_endereco: string;
  tecl_cidade: string;
  tecl_uf: string;
  tecl_telefone: string
}

function Update() {
  const { id }: { id: string } = useParams();
  const history = useHistory();

  const [data, setData]= useState<Client>({
    tecl_id: id,
    tecl_cidade: "",
    tecl_endereco: "",
    tecl_nome: "",
    tecl_telefone: "",
    tecl_uf: "",
  })

  const handleGetClient = async () => {
    try {
      const response = await api.get(`/teste/cliente/${id}`);
      const { data } = response.data;

      console.log(data)
      setData({
        tecl_nome: data.TECL_NOME,
        tecl_id: data.TECL_ID,
        tecl_endereco: data.TECL_ENDERECO,
        tecl_cidade: data.TECL_CIDADE,
        tecl_telefone: data.TECL_TELEFONE,
        tecl_uf: data.TECL_UF
      })

    }  catch (error) {
      console.error('Erro ao buscar clientes: ', error);
      return false;
    }
  }

  useMemo(async () => {
    await handleGetClient()
  }, [])

  const handleSubmit =  async () => {
    try {
      await api.put('/teste/cliente', {
        ...data,
        tecl_id: parseInt(id)
      });

      return true;
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      return false;
    }
  };

  return (
   <>
      <Header
        title="Atualizar cliente"
        goBack={() => history.goBack()}
      />

      <main
        className="w-full flex justify-center"
      >
        <div
          className="w-[80%]"
        >
          <Form
            type={2}
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

export default Update
