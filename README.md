# Distância de Hamming na Prática
Devido a eu não encontrar uma demonstração prática da distância de Hamming que fosse conceitual e atualizada, eu resolvi criar uma demonstração bem simples com o console do Node.js!

### Primeiramente, do que se trata a distância de Hamming?
A distância (neste caso, cálculo) de Hamming é um mecanismo lógico utilizado na computação moderna para diagnóstico de eventuais erros e alterações no conteúdo binário.

O método para efetuar isto é muito simples:
- Selecionando as posições binárias que correspondam a números ímpares;
- Comparando as posições através da operação lógica XOR.

Mas para que ela serve? Dentro de sistemas que optam por este modelo de codificação, têm-se bits de paridade, que em suma, são bits exclusivamente utilizados para garantir a *integridade* daquela palavra (ou sequência binária neste exemplo do projeto). Assim, efetua-se a comparação do mesmo dado enviado duas vezes.

Obs: Os bits de paridade **sempre ocuparão posições ímpares!!**

Caso alguns dos bits de paridade comparados (cada um com sua respectiva posição) sejam diferentes (Ex: bit n1 != bit2 n1), dizemos que a distância de Hamming daquele dado é 1. E obviamente, caso isto ocorra mais de uma vez, a distância cresce assim por diante!

### Onde isso seria utilizado na prática?
- Redes;
- Sistemas criptográficos;
- Sistemas de hash;
- Certificados digitais.

### Como funciona este código?

Antes de explicar seu funcionamento, de forma resumida... O propósito deste script é apenas exemplificar como seria comparar 2 bits na codificação de Hamming.
Você pode customizar o tamanho que quer comparar (por padrão vem 10) na variável `limit`. E as sequências binárias que gostaria de comparar, nas variáveis `hamming_bin_sequence` e `hamming_bin_sequence2`.

O código por si só vai selecionar as posições ímpares da sequência binária, e em seguida as comparar, contabilizando a posição que ocorreu e o total da distância. Ao final da execução, será impresso no terminal (ou prompt de comando, PowerShell, etc.) ambos.

### Como executar?
Linux (comandos para instalação):
- `sudo apt install nodejs git`
- `git clone https://github.com/berl4ngaa/Distancia-de-Hamming`
- `cd Distancia-de-Hamming`
- `node ./main.js`

Obs: Caso de outros gerenciadores de pacote, só adaptar o comando.

Windows:
- Instale o Node.js e Git pelos sites originais;
- Abra o Git CMD
- Execute `git clone https://github.com/berl4ngaa/Distancia-de-Hamming`
- Feche o Git CMD
- Abra o CMD
- Acesse o conteúdo do projeto (`cd Distancia-de-Hamming`)
- Execute `node ./main.js`

Obs: Caso queira alterar o código, com QUALQUER editor de texto pode-se alterar o código.
