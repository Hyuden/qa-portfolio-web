# 🚀 Performance Testing con JMeter

Pruebas de rendimiento y carga usando Apache JMeter sobre la API de JSONPlaceholder.

## 🎯 Objetivo

Verificar que la API soporte carga concurrente sin degradar el tiempo de respuesta.

## ⚙️ Configuración del Test

| Parámetro | Valor |
|-----------|-------|
| Usuarios concurrentes | 50 |
| Tiempo de rampa | 10 segundos |
| Iteraciones | 5 por usuario |
| URL base | https://jsonplaceholder.typicode.com |

## 📋 Escenarios probados

| Endpoint | Método | Criterio de éxito |
|----------|--------|-------------------|
| /users | GET | Tiempo respuesta < 2000ms |
| /posts | GET | Tiempo respuesta < 2000ms |
| /users/1 | GET | Tiempo respuesta < 1000ms |

## 📊 Resultados esperados

- Tasa de error: < 1%
- Tiempo de respuesta promedio: < 1500ms
- Throughput: > 10 req/seg