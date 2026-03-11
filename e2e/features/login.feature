Feature: Login de usuario

  Scenario: Login exitoso con credenciales válidas
    Given que el usuario está en la página de login
    When ingresa el email "student" y la contraseña "Password123"
    Then debería ver el mensaje de bienvenida

  Scenario: Login fallido con credenciales incorrectas
    Given que el usuario está en la página de login
    When ingresa el email "wrong@example.com" y la contraseña "wrongpass"
    Then debería ver un mensaje de error
