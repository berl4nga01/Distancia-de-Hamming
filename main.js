
function error()
{
    console.log("erro, verifique a sequência binária passada!")
}
function convert(hamming_bin_sequence, size, ponderance){
    
    for(let i = 0; i < size; i++){
        if((i % 2) == 0 ){
        continue
        }
        else{
        ponderance.push(hamming_bin_sequence[i])
        }
}
}

limit = 10 // personalize o limite conforme preferir
ponderance = [" "]
hamming_bin_sequence = "1001001110" // coloque aqui a sequencia binária
hamming_bin_sequence = hamming_bin_sequence.split("")
size = hamming_bin_sequence.length


ponderance2 = [" "]
hamming_bin_sequence2 = "1111111111"  // coloque aqui a sequencia binária 
hamming_bin_sequence2 = hamming_bin_sequence2.split("")
size2 = hamming_bin_sequence2.length

if(Number(size) !== limit){
    error()
}else if(Number(size2) !== limit){
    error()
}else{
    convert(hamming_bin_sequence, size, ponderance)
    convert(hamming_bin_sequence2, size2, ponderance2)
    
    ponderance = ponderance.toString()
    ponderance2 = ponderance2.toString()
    
    for(let i = 1; i < ponderance.length; i ++ ){
        ponderance = ponderance.replace(",", "")
        ponderance2 = ponderance2.replace(",", "")
    }
    
    console.log("Binários que serão testado: ")
    console.log(ponderance, " ", ponderance2)
    console.log("==========================================\nRealizando xor...\n========================================== ")
    
    array = ponderance.split("")
    array2 = ponderance2.split("")
    
    num = 0
    position = []
    for(let i = 1; i < array.length; i++){
        var cmp = Number(array[i]) ^ Number(array2[i])
        if (cmp == 1) {
            num++
            position.push(i) 
        }
    }
    console.log("A posição que muda é a(s) de número(s) ", position)
    console.log("A distância é: ", num) 

}