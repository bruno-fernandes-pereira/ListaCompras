import { useCallback, useEffect, useRef, useState, FormEvent } from 'react'
import { v4 } from 'uuid'
import { StandardButton, TrashButton, Container, ContainerItem } from './styles'

// React Hooks
// useRef
// useState

function Home() {

  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function adicionar() {
    
    if(inputRef.current.value != ""){
      setProdutos([
        { id: v4(), nome: inputRef.current.value },
        ...produtos
      ])
    }

    focusInput()

  }

  function focusInput() {
    inputRef.current.value = ""
    inputRef.current.focus()
  }

  function deletar(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
    
    focusInput()
  }

  function deletarTodos() {
    setProdutos([])

    focusInput()
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="Digite o produto" ref={inputRef} />
      <StandardButton bgColor="#57c200" onClick={adicionar}>Adicionar</StandardButton>
      <StandardButton bgColor="#ec2f00" onClick={deletarTodos}>Deletar Todos</StandardButton>

      {produtos.map((produto) => (
        <ContainerItem key={produto.id}>
          <p>{produto.nome}</p>
          <TrashButton onClick={() => deletar(produto.id)}>🗑️</TrashButton>
        </ContainerItem>
      ))}
    </Container>
  )
}

export default Home
