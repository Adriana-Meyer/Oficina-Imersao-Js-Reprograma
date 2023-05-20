const sum = require('../../dominio/calculadora/Projeto/sum');

describe("Testando a funcionalidade de soma", () => {

    test('soma de 1 + 2 deve ser igual a 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('soma de 1 + 2 não pode ser 0', () => {
        expect(sum(1, 2)).not.toBe(0);
    });

})
