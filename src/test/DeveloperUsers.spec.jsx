import React from 'react';
import { render } from '@testing-library/react';
import DeveloperDatabase from '../pages/DeveloperDatabase';
import ProductoService from '../services/ProductoService';

describe('DeveloperDatabase Component', () => {
  
  beforeEach(() => {
    spyOn(ProductoService, 'getAllProductos').and.returnValue(Promise.resolve({ data: [] }));
  });

  it('debería renderizar', () => {
    const { container } = render(<DeveloperDatabase />);
    expect(container).toBeTruthy();
  });
});
