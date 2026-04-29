// src/constants/courses.js

const courses = [

    {
      title: 'CC50 — Ciência da Computação de Harvard',

      institution: 'Harvard University • Fundação Estudar',

      description:
        'Curso introdutório de Ciência da Computação abordando lógica de programação, algoritmos, estruturas de dados, desenvolvimento web e fundamentos da computação.',

      status: 'Em andamento',

      icon: 'school-outline',

      certificate: null,
    },

  {
  title: 'Introdução ao Desenvolvimento de APIs',

  institution: 'Curso concluído',

  description:
    'Fundamentos do desenvolvimento de APIs, requisições HTTP, rotas, integração entre sistemas e conceitos de backend.',

  status: 'Concluído',

  icon: 'api',

  certificate:
    require('../../assets/certificates/api.png'),
},
{
  title: 'Estruturas de Controle em Java',

  institution: 'DIO',

  description:
    'Fundamentos de estruturas condicionais e de repetição utilizando Java.',

  status: 'Concluído',

  icon: 'language-java',

  certificate:
    require('../../assets/certificates/estrutura-java.png'),
},
{
  title: 'Java e a Arte da Abstração com Classes e Encapsulamento',

  institution: 'DIO',

  description:
    'Aplicação de conceitos de orientação a objetos com classes, abstração e encapsulamento em Java.',

  status: 'Concluído',

  icon: 'language-java',

  certificate:
    require('../../assets/certificates/encapsulamento-java.png'),
},
{
  title: 'Versionamento de Código com Git e GitHub',

  institution: 'DIO',

  description:
    'Fundamentos de versionamento de código utilizando Git e GitHub, incluindo commits, branches e colaboração.',

  status: 'Concluído',

  icon: 'github',

  certificate:
    require('../../assets/certificates/github.png'),
},
];

export default courses;