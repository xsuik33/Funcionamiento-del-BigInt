// =====================================================================
// PRUEBA DE CONCEPTO: OFUSCACIÓN DE CREDENCIALES BAAS CON BIGINT
// Autor: Iker Saul Gonzalez Ortiz
// Proyecto: BiblioTech
// =====================================================================

// 1. Llave original simulada: "abC" 
// (Proceso matemático inverso: "a"=61, "b"=62, "C"=43 -> Hex: 616243 -> BigInt: 6382147n)
const llaveOfuscadaBigInt = 6382147n;

function deofuscarLlave(bigIntValue) {
    const inicio = performance.now(); 
    let hexString = bigIntValue.toString(16);

    // Validación de paridad para alinear los bytes
    if (hexString.length % 2 !== 0) {
        hexString = '0' + hexString;
    }

    let llaveReconstruida = '';
    
    // Ciclo iterativo para mapeo ASCII
    for (let i = 0; i < hexString.length; i += 2) {
        let parHex = hexString.substring(i, i + 2);
        llaveReconstruida += String.fromCharCode(parseInt(parHex, 16));
    }

    const fin = performance.now(); 
    console.log(`[MÉTRICA] Tiempo de ejecución: ${(fin - inicio).toFixed(4)} ms`);
    return llaveReconstruida;
}

// Ejecución
console.log("Iniciando de-ofuscación en memoria RAM...");
const apiKeyLista = deofuscarLlave(llaveOfuscadaBigInt);
console.log(`[RESULTADO EXITOSO] Llave Reconstruida: ${apiKeyLista}`);
