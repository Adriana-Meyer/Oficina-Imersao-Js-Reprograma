const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Testando cálculo de valor por hora", () => {

    test("Valor por hora com salário de 1300 reais deve ser 8 reais/hora", () => {
        expect(calcularValorPorHora(1300)).toBe(8);
    });

    test("Valor por hora com salário de 1300 reais deve ser maior que 0", () => {
        expect(calcularValorPorHora(1300)).toBeGreaterThan(0);
        
    });


});