describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(4);
    cy.get("#segundo-numero").type(5);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });
});
describe('Crear matriz', () => {
  it('Crea una matriz con la cantidad de filas y columnas especificadas', () => {
    // Define los valores de filas y columnas
    const filas = 3;
    const columnas = 4;

    // Visita la página donde se encuentra el programa JavaScript
    cy.visit('/');

    // Ejecuta el programa JavaScript en la consola del navegador
    cy.window().then((win) => {
      const matriz = win.crearMatriz(filas, columnas);

      // Verifica que la matriz tenga el número correcto de filas y columnas
      expect(matriz.length).to.equal(filas);
      matriz.forEach((fila) => {
        expect(fila.length).to.equal(columnas);
      });
    });
  });
});
