import { SkipBack } from 'phosphor-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Header({ title, goBack }: { title: string; goBack?: any }) {
  return (
    <header className="flex w-full items-center gap-6 bg-red-300 p-5">
      <button className="text-2xl font-bold" type="button" onClick={goBack}>
        <SkipBack size={30} />
      </button>
      <h1 className="text-xl font-bold ">{title}</h1>
    </header>
  )
}

export default Header
