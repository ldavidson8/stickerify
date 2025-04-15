interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
