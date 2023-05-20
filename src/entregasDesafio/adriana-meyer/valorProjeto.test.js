const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("Cálculo de valor total do projeto", () => {

    test("Testando se o valor total do projeto de pacote básico com 40 horas, sendo 8 reais/hora, retorna 352 reais", () => {
        const funcionalidades = [ 
            "setup", 
            "formulario", 
            "responsividade"
        ];

        const valorHora = 8;

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(352);
    });

    test("Testando se o valor total do projeto de pacote intermediário com 96 horas, sendo 8 reais/hora, retorna 860,16 reais", () => {
        const funcionalidades = [ 
            "formulario", 
            "responsividade",
            "otimizacao_seo",
            "integracao_mailchimp", 
            "integracao_api_propria",
            "otimizacao_seo"
        ];

        const valorHora = 8;

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(860,16);
    });

    test("Testando se o valor total do projeto de pacote premium com 104 horas, sendo 8 reais/hora, retorna 957 reais", () => {
        const funcionalidades = [ 
            "setup", 
            "formulario", 
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ];

        const valorHora = 8;

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(957);
    });

    test("Testando se o valor total do projeto de pacote básico com 8 horas, sendo 15 reais/hora, retorna 132 reais", () => {
        const funcionalidades = [ 
            "construcao_1_pagina"
        ];

        const valorHora = 15;

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(132);
    });

    test("Testando se o valor total do projeto de pacote básico com 8 horas, sendo 20 reais/hora é maior que 160 reais", () => {
        const funcionalidades = [ 
            "construcao_1_pagina"
        ];

        const valorHora = 20;

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBeGreaterThan(160);
    });

    test("Testando se o valor total do projeto com 0 horas, sendo 20 reais/hora, retorna 0", () => {
        const funcionalidades = [];

        const valorHora = 20;

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(0);
    });
    


});
