import React from 'react'
import {render, screen} from '@testing-library/react'
import Formulario from './formulario/formulario'


//Jest
test(("Quando o input estiver vazio o botão deve estar desativado"),()=>{

  //AAA: 
  //1- Arrange
  //2- Act
  //3- Assert 
  render(<Formulario/>)

  //Encontra o input e o botão no DOM
  const input = screen.getByPlaceholderText("Insira o nome dos participantes")
  const botao = screen.getByRole("button")


  //O Jest espera que o input esteja no documente
  expect(input).toBeInTheDocument()
  //O Jest espera que o botão esteja no desabilitado
  expect(botao).toBeDisabled()

})
