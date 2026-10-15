# Máquina virtual com Linux (aula sem código)

Sessão de estudo de 09/10/2026. Anotação da aula: o que eu montei, o que travou e por quê.

## O que ficou pronto

- **VirtualBox 7.2** com uma VM rodando **Ubuntu Server 24.04 LTS** (sem interface gráfica).
- **2 GB de memória, 2 núcleos, disco de 25 GB dinâmico, rede NAT.**
- **OpenSSH** instalado junto com o sistema.
- **Redirecionamento de porta:** a porta `2222` do Windows leva à porta `22` da VM, só para a
  própria máquina (`127.0.0.1`).
- **Snapshot** tirado logo depois do primeiro login.

## Comandos que eu usei ou vou usar

```bash
# entrar na VM pelo terminal do Windows
ssh -p 2222 USUARIO@127.0.0.1

# atualizar o sistema (primeira coisa a fazer)
sudo apt update && sudo apt upgrade

# desligar a VM do jeito certo
sudo poweroff
```

## O que travou, e a causa

| O que apareceu | Causa | Saída |
|---|---|---|
| `No bootable medium found` | A VM ligou sem imagem `.iso` no leitor de disco | Armazenamento > Controladora IDE > escolher o `.iso` |
| As configurações não salvavam | A VM estava em **estado salvo** | Descartar Estado Salvo. Configuração só muda com a VM **desligada** |
| Aviso de captura do mouse | Ao clicar na VM, mouse e teclado ficam presos nela | **Ctrl da direita** solta |
| A tela da VM fica pequena | O console do Server tem resolução fixa | Modo escalonado (Ctrl direito + C), ou usar SSH |

## O que eu aprendi

- **Server em vez de Desktop** foi escolha de hardware: o PC tem 8 GB de memória, e o Ubuntu com área
  de trabalho pede 4 GB só para ele. O Server roda com 2 GB.
- **NAT em vez de modo ponte:** em ponte a VM aparece na rede de casa como mais um computador. Em
  NAT ela tem internet e fica escondida atrás do Windows. Para alcançar um serviço dela, redireciona
  a porta.
- **Snapshot é o desfazer da VM:** antes de uma experiência que pode quebrar o sistema, tira um.
- **Fechar a janela "salvando o estado" não é desligar:** a VM volta de onde parou, mas fica travada
  para mudança de configuração.
- **A versão 20.04 saiu do suporte padrão em 2025.** Para aprender, a 24.04 LTS é a atual.

## Próximos passos

- Rodar o `apt update && apt upgrade`.
- Trabalhar pelo SSH em vez da janela da VM (copiar e colar funciona).
- Instalar o Node dentro da VM e subir um servidor simples, alcançando pelo navegador do Windows com
  outro redirecionamento de porta.

## Sessão de 14/10/2026: esqueci o login e a senha

Eu vi muitas coisas. O Ubuntu é um negócio estranho, difícil e confuso de mexer, mas deu bom.

- Eu tinha esquecido o login e a senha, mas com o GRUB eu redescobri o login e resetei a senha, e
  deu certo. Tive que reiniciar tudo, tipo as configurações avançadas do Windows.
- Passei pelo Recovery Mode e pedi um `root` pra resetar com `passwd`.

```bash
# no Recovery Mode, opção root
mount -o remount,rw /
ls /home
passwd USUARIO
reboot
```
