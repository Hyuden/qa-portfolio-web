Feature: API de usuarios

  Scenario: Obtener lista de usuarios exitosamente
    Given que la API está disponible
    When hago un GET a "/users"
    Then el status code debe ser 200
    And la respuesta debe contener una lista de usuarios

  Scenario: Obtener un usuario específico
    Given que la API está disponible
    When hago un GET a "/users/1"
    Then el status code debe ser 200
    And el usuario debe tener nombre y email