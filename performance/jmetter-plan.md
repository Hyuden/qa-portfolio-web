# Performance Testing con JMeter

## Descripción
Script de stress testing para validar el rendimiento de una API REST bajo carga concurrente.

## Herramienta
- Apache JMeter 5.x

## Escenario de prueba
- **URL objetivo:** https://jsonplaceholder.typicode.com/users
- **Usuarios virtuales (threads):** 50
- **Ramp-up period:** 10 segundos
- **Iteraciones:** 5 por usuario

## Métricas evaluadas
- Tiempo de respuesta promedio
- Throughput (requests/segundo)
- Tasa de error
- Percentil 90 y 95

## Resultados esperados
| Métrica | Umbral aceptable |
|---|---|
| Tiempo respuesta promedio | < 500ms |
| Tasa de error | < 1% |
| Throughput | > 10 req/s |

## Cómo ejecutar
1. Descargar Apache JMeter desde https://jmeter.apache.org/
2. Abrir `performance/stress-test.jmx` en JMeter GUI
3. Ejecutar el plan de prueba
4. Revisar resultados en el listener "View Results Tree"
