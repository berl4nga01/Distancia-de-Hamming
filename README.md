# Distancia de Hamming na Prática
Devido a eu não encontrar uma demonstração prática da distância de hamming que fosse conceitual e atualizada... Eu resolvi criar uma demonstração bem simples com o console do nodejs!

### Primeiramente, do que se trata a distância de hamming? 
A distância (neste caso cálculo) de hamming é um mecanismo lógico utilizado na computação moderna para diagnóstica de eventuais erros e alterações no conteúdo binário 

O método para efetuar isto, muito simples é feito: 
- Selecionando as posições binárias que correspondam a números ímpares;
- Comparando as posições através da operação lógica XOR. 

Mas para que ela serve? Dentro de sistemas que optam por este modelo de codificação, tem-se bits de pariedade, que em suma, são bits exclusivamente utilizados para garantir a *integridade* daquela word (ou sêquencia binária neste exemplo do projeto). Assim, efetuasse a comparação do mesmo dado enviado 2 vezes. 

Obs: Os bits de pariedade **sempre ocuparão posições ímpares!!**

Caso alguns dos bits de pariedade comparados (cada um com sua respectiva posição) sejam diferentes, (Ex: bit n1 != bit2 n1), dizemos que a distância de hamming daquele dado é 1. E obviamente, caso isto ocorra mais de uma vez, a distância cresce assim por diante!
 

### Onde isso seria utilizado na prática?
- Redes;
- Sistemas criptográficos;
- Sistemas de hash;
- Certificados digitais.

### Como funciona este código ?

Antes de explicar seu funcionamento, de forma resumida... O propósito deste script é apenas exemplificar como seria comparar 2 bits na codificação de hamming. 
Você pode customizar o tamanho que quer comparar (por padrão vem 10) na varíavel `limit`. E as sêquencias binárias que gostaria de comparar, nas variavéis `hamming_bin_sequence` e `hamming_bin_sequence2`. 

O código por sí só vai selecionar as posições impares da sêquencia binária, e em seguidas as comparar, contabilizando a posição que ocorreu, e o total da distância. Ao final da execução, será imprimido no terminal (ou prompt de comando, powershell, etc.) ambos. 

### Como executar ?
Linux (comandos para instalação):
- `sudo apt install nodejs git`
-  `git clone https://github.com/berl4ngaa/Distancia-de-Hamming`
- `cd Distancia-de-Hamming`
- `node ./main.js`

Windows: 
- Instale o nodejs e github pelos sites originais;
- Abra o git cmd
- Execute `git clone https://github.com/berl4ngaa/Distancia-de-Hamming`
- Após o fim do primeiro comando, execute `cd Distancia-de-Hamming`
- Após o fim do segundo segundo comando, execute `node ./main.js`

Obs: Caso queira alterar o código, com QUALQUER editor de texto pode-se alterar o código. 

