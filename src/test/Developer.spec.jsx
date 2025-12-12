import React from 'react';
import { render } from '@testing-library/react';
import Developer from '../pages/Developer';
import UsuarioService from '../services/UsuarioService';
import ProductoService from '../services/ProductoService';
import VentaService from '../services/VentaService';
import ImagenService from '../services/ImagenService';

describe('Developer Component', () => {
  
  beforeEach(() => {
    spyOn(UsuarioService, 'getAllUsuarios').and.returnValue(Promise.resolve({ data: [] }));
    spyOn(ProductoService, 'getAllProductos').and.returnValue(Promise.resolve({ data: [] }));
    spyOn(VentaService, 'getAllVenta').and.returnValue(Promise.resolve({ data: [] }));
    spyOn(ImagenService, 'getAllImagens').and.returnValue(Promise.resolve({ data: [] }));
  });

  it('debería renderizar', () => {
    const { container } = render(<Developer />);
    expect(container).toBeTruthy();
  });
});