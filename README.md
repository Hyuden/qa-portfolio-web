# 🧪 QA Portfolio Web

Framework de automatización de pruebas end-to-end para aplicaciones web, construido con Cucumber, Playwright y Node.js.

## 🛠️ Tecnologías

- **Cucumber.js** - BDD con lenguaje Gherkin
- **Playwright** - Automatización de navegador
- **Chai** - Librería de aserciones
- **Node.js** - Entorno de ejecución

## 📁 Estructura del Proyecto
```
qa-portfolio-web/
├── e2e/
│   ├── features/        # Escenarios en lenguaje Gherkin
│   └── steps/           # Implementación de los steps
├── reports/             # Reportes HTML generados
├── package.json
└── README.md
```

## 🚀 Instalación
```bash
# Clonar repositorio
git clone https://github.com/Hyuden/qa-portfolio-web.git
cd qa-portfolio-web

# Instalar dependencias
npm install

# Instalar navegador
npx playwright install chromium
```

## ▶️ Ejecución
```bash
# Correr tests
npm test

# Correr tests y generar reporte HTML
npm run test:report
```

## 📊 Reportes

Al ejecutar `npm run test:report` se genera automáticamente un reporte HTML en `reports/report.html` que se abre en el navegador al finalizar las pruebas.

## ✅ Casos de prueba

| Feature | Escenario | Tipo | Estado |
|---------|-----------|------|--------|
| Login | Login exitoso con credenciales válidas | E2E | ✅ |
| Login | Login fallido con credenciales incorrectas | E2E | ✅ |
| API | Obtener lista de usuarios | API | ✅ |
| API | Obtener usuario específico | API | ✅ |

## 👨‍💻 Autor

**Christian** - QA Automation Engineer  
[GitHub](https://github.com/Hyuden)