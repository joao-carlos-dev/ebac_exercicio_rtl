import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        const comentarioTextarea = screen.getByRole('textbox')
        fireEvent.change(comentarioTextarea, {
            target: { value: 'Primeiro comentario'}
            })
        expect(comentarioTextarea).toHaveValue("Primeiro comentario")

        const submitBotao = screen.getByRole('button', { name: /comentar/i })
        fireEvent.click(submitBotao)
        expect(screen.getByText('Primeiro comentario')).toBeInTheDocument()

        fireEvent.change(comentarioTextarea, {
            target: { value: 'Segundo comentario' }
        })
        expect(comentarioTextarea).toHaveValue('Segundo comentario')
        fireEvent.click(submitBotao)
        expect(screen.getByText('Segundo comentario')).toBeInTheDocument()

        expect(screen.getAllByTestId('comentario-postado')).toHaveLength(3)
    });
});