const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Verifica qual pacote de acordo com quantidade de horas do projeto", () => {
    
    test("Projeto de 50 horas retorna pacote_basico", () => {
        const horasDeProjeto = 50;
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico");
    });
    
    test("Projeto de 100 horas retorna pacote_intermediario", () => {
        const horasDeProjeto = 100;
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_intermediario");
    });
    
    test("Projeto de 104 horas retorna pacote_premium", () => {
        const horasDeProjeto = 104;
        expect(calcularPacote(horasDeProjeto)).toBe("pacote_premium");
    });
    
});