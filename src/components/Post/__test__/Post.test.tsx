import { render, screen } from "@testing-library/react";
import Post from "..";

describe('Teste para o componente Post' , () => {
    test('Deve renderizar correntamente', () => {
        render(<Post imageUrl="https://via.placeholder.com/250x250">Teste</Post>)
        expect(screen.getByText('Teste')).toBeInTheDocument()

        const postImagem = screen.getByAltText('Post')
        expect(postImagem).toBeInTheDocument()
        expect(postImagem).toHaveAttribute("src, https://via.placeholder.com/250x250")

        expect(screen.getByTestId('post-comments')).toBeInTheDocument()
    })
})