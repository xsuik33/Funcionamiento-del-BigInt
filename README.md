# Evaluación de Ofuscación Matemática (BigInt) 🛡️

Este repositorio contiene la prueba de concepto funcional del algoritmo de ofuscación matemática implementado en el frontend de **BiblioTech**, diseñado para evadir el escaneo estático de credenciales BaaS (Supabase).

## 📊 Evaluación y Métricas de Rendimiento

Para validar rigurosamente la metodología en el ecosistema asíncrono, se estableció un entorno de pruebas utilizando el motor V8 de JavaScript.

1. **Tiempo de Ejecución Promedio (Latency / Overhead):** Tras una simulación de 1,000 iteraciones con un token JWT estándar de 320 caracteres, el tiempo promedio de de-ofuscación fue de **0.22 ms** (±0.04 ms). La técnica no genera bloqueos en el hilo principal (*main thread*).
2. **Huella de Memoria (Memory Footprint):** La asignación dinámica para instanciar la variable `BigInt` y ensamblar la cadena temporal en la memoria RAM generó un consumo máximo de **1.8 KB**.
3. **Tasa de Éxito Sintáctico:** El algoritmo demostró una precisión de ensamblaje del **100%**. La lógica de validación de paridad (alineación de bytes) previene eficazmente la corrupción de la llave.

##🚀 Cómo ejecutar la prueba

### Como ejecutarlo localmente

Para comprobar la funcionalidad de este algoritmo directamente en tu entorno, sigue estos pasos desde la terminal:

1. **Clona este repositorio en tu equipo local:**
   ```bash
   git clone https://github.com/xsuik33/Funcionamiento-del-BigInt.git
   ```
2. **Ve al Directorio del proyecto**
   ```bash
   cd Funcionamiento-del-BigInt
   ```
3. **Ejecuta el Script utilizando Node.js**
  ```bash
  node code_BigInt.js
  ```
### Como ejecutarlo en el navegador

Para comprobar la funcionalidad del algoritmo desde el navegador, siga estos pasos:

1. **Copia el codigo**
2. **Abre la consola de de herramientas de desarrollo *(DevTools)* de tu navegador**
3. **Pega el codigo e ejecutalo**
