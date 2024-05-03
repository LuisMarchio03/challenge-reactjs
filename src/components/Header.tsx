
function Header({title, goBack}: { title: string, goBack?: any }) {
  return (
    <header
      className="w-full bg-red-300 flex items-center gap-6 p-5"
    >
      <button
        className="font-bold text-2xl"
        type="button"
        onClick={goBack}
      >Voltar</button>
      <h1
        className="font-bold text-2xl"
      >{title}</h1>
    </header>
  )
}

export default Header
