import React from 'react';
import { render } from '@testing-library/react';
import DeveloperUsers from '../pages/DeveloperUsers';
import UsuarioService from '../services/UsuarioService';

describe('DeveloperUsers Component', () => {
  
  beforeEach(() => {
    spyOn(UsuarioService, 'getAllUsuarios').and.returnValue(Promise.resolve({ data: [] }));
  });

  it('debería renderizar', () => {
    const { container } = render(<DeveloperUsers />);
    expect(container).toBeTruthy();
  });
});