import { describe, expect, it } from 'vitest'

import { deveExibirConviteInstalacao } from './pwa-instalacao'

describe('convite de instalação', () => {
  it.each(['/login', '/recuperar-senha', '/auth/redefinir-senha', '/cadastro'])(
    'não aparece na rota de autenticação %s',
    (rota) => {
      expect(deveExibirConviteInstalacao(rota, true)).toBe(false)
    }
  )

  it('espera a primeira rolagem na landing', () => {
    expect(deveExibirConviteInstalacao('/', false)).toBe(false)
    expect(deveExibirConviteInstalacao('/', true)).toBe(true)
  })

  it('mantém o convite disponível nas demais rotas', () => {
    expect(deveExibirConviteInstalacao('/kanban/quadro-1', false)).toBe(true)
  })
})
