const ROTAS_DE_AUTENTICACAO = [
  '/login',
  '/cadastro',
  '/recuperar-senha',
  '/auth/redefinir-senha',
]

export function deveExibirConviteInstalacao(rota: string, rolouNaLanding: boolean) {
  if (ROTAS_DE_AUTENTICACAO.some((rotaDeAuth) => rota === rotaDeAuth || rota.startsWith(`${rotaDeAuth}/`))) {
    return false
  }

  return rota !== '/' || rolouNaLanding
}
