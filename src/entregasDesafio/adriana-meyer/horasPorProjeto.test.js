const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo de horas por projeto", () => {

    test("Teste que calcula se a lista com 3 funcionalidades terá X horas", () => {
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];

        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
    });

    test("Teste que verifica se a lista com uma funcionalidade inexistente retorna NaN", () => {
        const listaDeFuncionalidadesInexistente = ["testes"];

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesInexistente)).toBeNaN();
    });

    test("Teste que verifica se a lista vazia retorna 0", () => {
        const listaDeFuncionalidadesVazia = [];

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesVazia)).toBe(0);
    });

    test("Teste que verifica com todas as funcionalidades retorna 104 horas de projeto", () => {
        const listaTodasFuncionalidades = [ 
            "setup", 
            "formulario", 
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"];

        expect(calcularHorasDeProjeto(listaTodasFuncionalidades)).toBe(104);
    });

});