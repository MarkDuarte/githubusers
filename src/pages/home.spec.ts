import { render, fireEvent, waitFor } from '@testing-library/react'
import { api } from '@/services/api'
import { UserContext } from './../context/userContext'
import Home from './'

const mockUserContext = {
  dataSetUsers: jest.fn()
}

jest.mock('@/services/api', () => ({
  api: jest.fn()
}))

describe('Home component', () => {
  it('deve chamar a API corretamente quando o campo de busca não estiver vazio', async () => {
    const initialState = {
      search: 'example'
    }
    const { getByPlaceholderText, getByRole } = render(
      <UserContext.Provider value={mockUserContext}>
        <Home />
      </UserContext.Provider>
    )

    const input = getByPlaceholderText('Digite a sua Busca')
    const button = getByRole('button', { name: 'Buscar' })
    fireEvent.change(input, { target: { value: initialState.search } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(api).toHaveBeenCalledWith(initialState.search)
    })

    expect(mockUserContext.dataSetUsers).toHaveBeenCalledWith(400)
  })

  it('deve exibir a mensagem de erro corretamente quando ocorrer um erro na busca', async () => {
    // Configurar o estado inicial
    const initialState = {
      search: 'example'
    }
    api.mockRejectedValue(new Error('Erro ao localizar usuário'))
    const { getByPlaceholderText, getByRole, getByText } = render(
      <UserContext.Provider value={mockUserContext}>
        <Home />
      </UserContext.Provider>
    )

    const input = getByPlaceholderText('Digite a sua Busca')
    const button = getByRole('button', { name: 'Buscar' })
    fireEvent.change(input, { target: { value: initialState.search } })
    fireEvent.click(button)

    
    await waitFor(() => {
      expect(getByText('Erro ao localizar usuário')).toBeInTheDocument()
    })
  })

  it('deve exibir a mensagem de erro corretamente quando o campo de busca está vazio', async () => {
    
    const initialState = {
      search: ''
    }
    const { getByRole, getByText } = render(
      <UserContext.Provider value={mockUserContext}>
        <Home />
      </UserContext.Provider>
    )

    const button = getByRole('button', { name: 'Buscar' })
    fireEvent.click(button)

    await waitFor(() => {
      expect(getByText('O campo de busca está vazio.')).toBeInTheDocument()
    })
  })
})
