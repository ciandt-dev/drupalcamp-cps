module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DrupalCamp Campinas 2016",
      description: "A tradicional DrupalCamp, agora no interior paulista!",
      date: "25 de junho",
      // If your event is free, just comment this line
      //price: "FREE",
      venue: "Faculdade Metrocamp",
      address: "Rua Doutor Salles de Oliveira, 1661 - Vila Industrial",
      city: "Campinas",
      state: "São Paulo",
      logo: "themes/drupalcamp-cps/img/logo.png",
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "INGRESSOS ESGOTADOS! (Lista de Espera, clique aqui)",
        icon: "arrow-right",
        link: "http://goo.gl/forms/nnGu8qQlsBEeUtA23"
    },

    // Site info
    site: {
      theme: "drupalcamp-cps",
      url: "http://campinas2016.drupalcamp.com.br",
      googleanalytics: "UA-77098436-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      //'afterhours',
      'schedule',
      'speakers',
      'location',
      'arrival',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O Evento",
      location: "Localização",
      arrival: "Como chegar",
      afterhours: "Confraternização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Realização",
      partners: "Apoio",
      contact: "Contato"
    },

    // Foundation icon to use at titles: http://zurb.com/playground/foundation-icon-fonts-3
    icons: {
      home: "home",
      about: "star",
      location: "map",
      arrival: "compass",
      afterhours: "like",
      speakers: "megaphone",
      schedule: "calendar",
      sponsors: "check",
      partners: "torsos",
      contact: "mail"
    },

    speakers: [
        {
             name: "Preston So",
             photo: "https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-325491-1425442274.jpg?itok=gs2YjGqw",
             bio: "Preston So has designed and developed websites since 2001 and built them in Drupal since 2007. He is Development Manager of Acquia Labs at Acquia, where he works on new open-source and product initiatives. Previously, Preston was Technical Lead of Entertainment Weekly at Time Inc. and co-founded the Southern Colorado Drupal User Group (est. 2008). Since 2008, Preston has spoken at conferences on three continents on topics such as decoupled Drupal, (responsive) design, front-end development, user experience, and cutting-edge code.",
             company: "Development Manager @ Acquia Labs",
             link: {
               href: "http://drupal.org/u/prestonso",
               text: "prestonso"
             }
        },
        {
             name: "André Boscatto",
             photo: "https://c2.staticflickr.com/8/7439/27440540435_340690d0cf_b.jpg",
             bio: "Me chamo André Boscatto, sou formado em Engenharia de Computação pela PUC-Campinas, MBA em Gerenciamento de Projetos pela FGV, atuo como arquiteto de software na CI&T e trabalho com Drupal ja faz 5 anos.",
             company: "Arquiteto de Software @ CI&T",
             link: {
               href: "http://drupal.org/u/andreboscatto",
               text: "andreboscatto"
             }
        },
        {
             name: "Ariane Izac",
             photo: "https://s.gravatar.com/avatar/14958fc6544edc07d96d33d6b6ba6a0b?s=120",
             bio: "Pós-Graduada em Engenharia de Software na Véris IBTA, Experiência com testes de software há cerca de 9 anos; Atuação principalmente com testes manuais com planejamento dos testes em times ágeis com framework Scrum; Atuação com testes automáticos com a ferramenta QF-Test; Analista de Teste na empresa MATERA System; faço postagens regulares para o Blog da empresa; Criadora do grupo no LinkedIn para reunir assuntos relacionados a testes de software: Diário de uma paixão: Teste de Software",
             company: "Analista de Teste @ MATERA Systems"
        },
        {
             name: "Augusto Knijnik",
             photo: "https://media.licdn.com/media/p/6/005/050/22a/21b4704.jpg",
             bio: "Augusto, Eng. da Computação pela UFSCAR, apaixonado por tecnologia e inovação. Um dos líderes do Núcleo de Produtos e Serviços Digitais, área responsável por todos sites Drupal, Apps e co-responsável pela inserção do mindset ágil, DevOps e estratégia Drupal e Mobile.",
             company: "Líder do Núcleo de Produtos e Serviços Digitais @ Natura",
        },
        {
             name: "Daniel Carvalhinho",
             photo: "http://i.imgur.com/frixopF.jpg",
             bio: "Desenvolvedor há 17 anos (e contando), trabalhou com diversas linguagens mas se focou em PHP e seu ecossistema. Há 6 anos trabalhando com Drupal, já liderou grandes equipes em dezenas (ou centenas) de projetos e treinou muitos desenvolvedores pelo mundo. Atualmente trabalha como Lead Developer na Trellon. Tradutor and Revisor @ Brazilian Portuguese Translation Team. Co-autor do módulo Entity Scaffold",
             company: "Lead Developer @ Trellon, LLC",
             link: {
               href: "http://drupal.org/u/dscl",
               text: "dscl"
             }
        },
        {
             name: "Daniel Santos",
             photo: "http://i.imgur.com/ItzFhiE.jpg",
             bio: "Com 3 anos de experiência na área de desenvolvimento web, e nesses 3 anos trabalhando com Drupal nas versões 6 e 7 (8 somente alguns estudos), na versão 7 utilizando como Headless, participando também de alguns eventos Drupal Camp 2015, PHP Conference 2015, PHP Experience 2016, participando também de alguns encontros e eventos com o pessoal do PHPSP, entre outros eventos de FrontEnd.",
             company: "Web Developer @ Just Digital",
             link: {
               href: "http://drupal.org/u/daniel-santos",
               text: "daniel-santos"
             }
        },
        {
             name: "Erick Bonnemasou Jaccoud",
             photo: "http://i.imgur.com/iSWGXT3.jpg",
             bio: "Formado em Ciência da Computação pela Unicamp, atuo como arquiteto de software na CI&T e trabalho com Drupal há mais de 5 anos. Acredito que código \"bem feito\" é absolutamente essencial para qualquer projeto de desenvolvimento.",
             company: "Arquiteto de Software @ CI&T",
             link: {
               href: "http://drupal.org/u/erickbj",
               text: "erickbj"
             }
        },
        {
             name: "Eugenio Silva",
             photo: "http://i.imgur.com/gat6gvT.jpg",
             bio: "Trabalho com Drupal desde 2010, quando ingressei na empresa atual. Tive experiência como desenvolvedor, tester e, atualmente, lider de equipe em projetos Drupal. Atualmente trabalho com projetos farmacêuticos de Marketing Digital em Plataforma Drupal.",
             company: "Support Master @ CI&T",
             link: {
               href: "http://drupal.org/u/eugenio-silva",
               text: "eugenio-silva"
             }
        },
        {
             name: "Felipe Dewulf",
             photo: "https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-1703800-1423663448.jpg?itok=JYA-txJf",
             bio: "Arquiteto de Sistemas na CI&T, e atuando com desenvolvimento de software há mais de 20 anos, desde Assembler em consoles, até desenvolvimento Web, passando por C/C++, Java/JEE, e nos últimos anos Drupal e PHP. Com experiência em Qualidade e Performance, e projetos Drupal de médio e grande porte, a ideia é apresentar uma visão do Drupal do ponto de vista de performance da aplicação.",
             company: "Systems Architect @ CI&T",
             link: {
               href: "http://drupal.org/u/fdewulf",
               text: "fdewulf"
             }
        },
        {
             name: "Felipe Oliveira Campos",
             photo: "http://i.imgur.com/kas3e43.png",
             bio: "Trabalho com desenvolvimento de software há quase 9 anos. Conheci o Drupal na CI&T, onde trabalho. Gostei muito em especial pelo potencial que o Drupal oferece!",
             company: "Developer @ CI&T",
             link: {
               href: "http://drupal.org/u/fcampos",
               text: "fcampos"
             }
        },
        {
             name: "Felipe Ribeiro",
             photo: "http://i.imgur.com/ajgR2bA.jpg",
             bio: "Desenvolvedor Drupal há 5 anos, participo na comunidade com criação e correção de módulos. Atualmente com commits em 19 módulos diferentes e no core do Drupal 7 e 8. Trabalho como desenvolvedor na CI&T. Participei da  DrupalCamp São paulo 2015 e DrupalCon New Orleans 2016.",
             company: "Desenvolvedor Sênior @ CI&T",
             link: {
               href: "http://drupal.org/u/felribeiro",
               text: "felribeiro"
             }
        },
        {
             name: "Fernando Katsukawa",
             photo: "https://pbs.twimg.com/profile_images/1190115662/back_400x400.JPG",
             bio: "Desenvolvedor Drupal, 31 anos, formado em Gestão da Tecnologia da Informação pela FATEC. Na área de Informática desde 2001: 8 anos como suporte técnico e 7 anos como desenvolvedor web, sendo 5 anos com o Drupal. Nos últimos meses tenho dedicado mais tempo e dedicação à comunidade Drupal.",
             company: "Developer @ CI&T",
             link: {
               href: "http://drupal.org/u/fkatsukawa",
               text: "fkatsukawa"
             }
        },
        {
             name: "Frederico Schillings Ferrer",
             photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAV2AAAAJGZjNDY3Mjc1LWJiMzUtNDUzMi1hZDI2LWU3NmQ3ZTNlNThmNw.jpg",
             bio: "Cofundador da Taller Negócios Digitais, onde transformamos ideias em projetos inovadores, criamos produtos personalizados e prestamos serviços que ajudam nossos clientes a alcançarem seus objetivos de negócio no espaço digital. Organizador da DrupalCamp São Paulo 2013 e da DrupalCamp Florianópolis em 2014, foi também palestrante da DrupalCon Bogotá 2015. Entusiasta das práticas ágeis e lean mindset, acredito que podemos nos superar e provocar a mudança de forma positiva em todas nossas relações.",
             company: "Cofundador e Business Development @ Taller Negócios Digitais",
             link: {
               href: "http://drupal.org/u/fred-ferrer",
               text: "fred-ferrer"
             }
        },
        {
             name: "Gabriel Machado Santos",
             photo: "https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-1329448-1403016008.jpg",
             bio: "Passionate about technology, focusing on open software platforms and delivering high quality solutions. Over 7 years experience with IT and software development. Technical software knowledge, strong leadership and communication have lead me to coach some employees developing their careers. Currently facing the challenge to be a software architect and leader of a high complexity project for Pfizer company.",
             company: "Arquiteto de Software @ CI&T",
             link: {
               href: "http://drupal.org/u/gabrielmachadosantos",
               text: "gabrielmachadosantos"
             }
        },
        {
             name: "Handrus Nogueira",
             photo: "https://media.licdn.com/mpr/mprx/0_aWdGdEL6UWJHSNdewIk2uwbH4MIHak5eEsB7fIJXvDEIE5c6HMeaSTvgwF9",
             bio: "Handrus​ trabalha com web e opensource há mais de 12 anos; 7 com metodologias ágeis. Disposto a ajudar qualquer evento relacionado a Open-Source,atua como Diretor de Vendas e Consultor na Taller, empresa alimentada por excelência!",
             company: "Diretor Comercial @ Taller",
             link: {
               href: "http://drupal.org/u/handrus",
               text: "handrus"
             }
        },
        {
             name: "Jean F Baro",
             photo: "https://pbs.twimg.com/profile_images/1232961400/jean_400x400.jpeg",
             bio: "Jean F Baro é Arquiteto de soluções na Natura e incansável defensor do projetos open-source. Especializado em casar tecnologia e inovação com budgets e em entregar soluções com altíssimo custo-benefício.",
             company: "Arquiteto de Soluções @ Natura"
        },
        {
             name: "João Paulo",
             photo: "https://avatars2.githubusercontent.com/u/1239728?v=3&s=460",
             bio: "Formado em redes de comunicação e análise de sistemas, membro da ADB e organizador do Drupal Meetup São Paulo. Atualmente atuando como Arquiteto PHP na Itelios do Brasil.",
             company: "Arquiteto PHP @ Itelios",
             link: {
               href: "http://drupal.org/u/seregatte",
               text: "seregatte"
             }
        },
        {
             name: "Leonardo Torati",
             photo: "http://i.imgur.com/3YnoJiW.jpg",
             bio: "Eu trabalho com Drupal a cerca de 2 anos, recentemente entrei em um projeto de colaboração com a comunidade. Após perceber os benefícios do uso de Drupal estou buscando me especializar.",
             company: "Developer @ CI&T",
             link: {
               href: "http://drupal.org/u/leotorati",
               text: "leotorati"
             }
        },
        {
             name: "Luiz Henrique Guerra",
             photo: "https://scontent-mia1-1.xx.fbcdn.net/t31.0-8/s960x960/12792374_1070884192983922_3967119413104793385_o.jpg",
             bio: "Bacharel em Design pela UFSC e desenvolvedor na Taller. Sonha em programar tão bem quanto faz churrasco.",
             company: "Desenvolvedor @ Taller",
             link: {
               href: "http://drupal.org/u/lhguerra",
               text: "lhguerra"
             }
        },
        {
             name: "Luiz Petri",
             photo: "http://i.imgur.com/v9ff0NQ.jpg",
             bio: "Olá! Eu me chamo Petri e sou Drupaleiro a 4 anos. Sempre gostei de botar a mão na massa e implementar desafios utilizando esta grande ferramenta chamada Drupal.",
             company: "Developer @ CI&T",
             link: {
               href: "http://drupal.org/u/luizsgpetri",
               text: "luizsgpetri"
             }
        },
        {
             name: "Marcelo Soares",
             photo: "http://i.imgur.com/sDwMJtU.jpg",
             bio: "Web Developer à 8 anos, passou pela Mitra Web, MMDA e atualmente trabalha na Base Digital, desenvolvendo para empresas como Souza Cruz, SEBRAE, Visão Mundial, Vipal entre outras. Associado e Membro do Conselho atual da Associação Drupal.org, divulgador e entusiasta do Drupal e Software Livre. Técnico em Biotecnologia, frequentou a academia nos cursos de Jogos Digitais e Ciência da Computação e, atualmente é graduando em Ciência Sociais pela UFRGS.",
             company: "Desenvolvedor Pleno @ base.digital",
             link: {
               href: "http://drupal.org/u/nimbfire",
               text: "nimbfire"
             }
        },
        {
             name: "Mayara Campos",
             photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAiCAAAAJDllMTk3NjEyLWVmNmMtNGM0OS05ODhkLTYyZWNkOTUyNGFmMQ.jpg",
             bio: "Mayara Campos é CIO da Kickante, maior plataforma brasileira de CrowdFunding, desde 2015 como responsável pelo produto, TI e BI. Com 8 anos de experiência em startups foi responsável pelo maior jogo social do brasil o Colheita Feliz, que teve 40 milhões de usuários.",
             company: "CIO @ Kickante",
        },
        {
             name: "Natan Moraes",
             photo: "http://i.imgur.com/HvzZJ1q.jpg",
             bio: "Desenvolvedor certificado Acquia, trabalhando em Campinas na CI&T como desenvolvedor Drupal há 5 anos e já Trabalhei com Drupal nas versões 6 e 7. Com o o lançamento do Drupal 8, estou animado para conhecer e aplicar as melhorias desta nova versão.",
             company: "Desenvolvedor @ CI&T",
             link: {
               href: "http://drupal.org/u/natanmoraes",
               text: "natanmoraes"
             }
        },
        {
             name: "Nicolás Bouhid",
             photo: "https://dev.acquia.com/sites/default/files/styles/medium/public/pictures/picture-6946-1464467283.png?itok=EaTmbPmH",
             bio: "Nicolás was born in Buenos Aires, Argentina and since 2013 lives in Campinas, Brazil. He has been a Drupalist since 2011, and started as a developer on 2006 as a game (literally). Passionate for learning and teaching new topics, always looking forward new challenges. Worked for worldwide known companies and institutions.",
             company: "Software Architect @ CI&T",
             link: {
               href: "http://drupal.org/u/nbouhid",
               text: "nbouhid"
             }
        },
        {
             name: "Rodrigo Wanderley de Melo Cardoso",
             photo: "http://i.imgur.com/9iZfXK8.jpg",
             bio: "Bacharel em Matemática Aplicada e Computacional pela Universidade Federal Rural do Rio de Janeiro, MBA em Engenharia de Softwares Orientado para Serviços - IBTA/Metrocamp. Community Manager na iMasters. Criador do Poke PHP. Evangelista PHPSP. Desenvolve sistemas desde batalhas Pokemon em mIRC, a robôs automatizadores de tarefas.",
             company: "Community Manager @ iMasters",
             link: {
               href: "http://drupal.org/u/pokemaobr",
               text: "pokemaobr"
             }
        },
        {
             name: "Sebastian Ferrari",
             photo: "http://i.imgur.com/6Kj2DYv.jpg",
             bio: "Nascido no Uruguay morando há 10 anos no Brasil, onde sou Co-fundador da Taller Negócios Digitais (taller.net.br). Sou programador / empreendedor no mundo web desde 2006, e tenho usado varias tecnologias como: Javascript, PHP, Drupal, Apache Solr e MongoDB para criar aplicações web para empresas como a Natura, Editora Abril, Ogilvy Brasil, Claro Brasil, Intelbras e a Taller.",
             company: "CTO @ Taller",
             link: {
               href: "http://drupal.org/u/sebas5384",
               text: "sebas5384"
             }
        },
        {
             name: "Thiago Rodrigues",
             photo: "https://xthiago.com/img/thiago/thiago-rodrigues-junho2015.jpg",
             bio: "Evangelista PHP, co-organizador da comunidade PHPSP Campinas, Engennheiro de Software Sênior na CI&T e bacharel em Sistemas de Informação pela Universidade do Estado de Minas Gerais (UEMG).",
             company: "Engenheiro de Software Sênior @ CI&T",
             link: {
               href: "http://drupal.org/u/xthiago",
               text: "xthiago"
             }
        },
        {
             name: "Thomas Bryan",
             photo: "http://i.imgur.com/JWpYWtT.jpg",
             bio: "Engenheiro de Computação, pós graduado em Segurança da Informação, trabalhou em empresas publicas, nacionais e multinacionais nos papeis de tester, scrum master, desenvolvedor de software, líder técnico e arquiteto. Se identifica muito com DevOps, Python, Django, PHP, Linux e claro, Drupal ;-)",
             company: "Arquiteto de Software @ CI&T",
             link: {
               href: "http://drupal.org/u/thobryan",
               text: "thobryan"
             }
        },
        {
             name: "Vicente Eugenio",
             photo: "https://c2.staticflickr.com/8/7607/27440493725_e93fd55b2c_o.jpg",
             bio: "Vicente Eugenio, formado em Análise e Desenvolvimento de Software na UNIFIA atualmente trabalho como desenvolvedor Drupal na CI&T desde 2014",
             company: "Developer @ CI&T",
             link: {
               href: "http://drupal.org/u/vicenteeugenio",
               text: "vicenteeugenio"
             }
        },
    ],



    // The entire schedule
    schedule: [
      {
        name: "Credenciamento / Café da Manhã",
        time: "07h30"
      },
      {
        name: "Abertura + Keynote: Arquitetura web desacoplada e o futuro do Drupal (Preston So - Acquia)",
        time: "09h00"
      },
      {
        time: "10h30",
        presentations: [
            {
              title: "Turbinando sua aplicação com Redis",
              company: "Daniel Santos",
              description: "Palestra falando um pouco sobre o Redis (Remote Dictionary Server), suas funcionalidades, coisas legais que podemos fazer o utilizando, persistência (já que estamos falando de um ferramenta que utiliza memória RAM) e exemplo práticos utilizando Redis com PHP e com Drupal",
            },
            {
              title: "Meu primeiro módulo Drupal",
              company: "Felipe Oliveira Campos",
              description: "Vou mostrar o passo a passo e na prática, em Drupal 7 e 8, de como criar um módulo simples no Drupal e o que é preciso para fazê-lo.",
            },
            {
              title: "Marketing Digital para Mercados Farmacêuticos",
              company: "Eugenio Silva",
              description: "As iniciativas de Marketing Digital para mercados farmacêuticos contam com diversos desafios e restrições médicas/legais e, através do Drupal, podemos atingir ganho de produtividade e maior controle sobre as iniciativas, através de módulos desenvolvidos pela própria comunidade.",
            },
            {
              title: "A importância do Cache em Drupal e as novidades no Drupal 8",
              company: "Felipe Dewulf",
              description: "O Drupal fornece excelentes ferramentas de gerenciamento de conteúdo para um site, mas ao mesmo tempo isso tem um custo de processamento. Para sites de conteúdo estático, onde podemos ligar o Cache default do Drupal, muito dessa complexidade de processamento é eliminada com o cache de página, e precisamos nos preocupar somente com a performance da página HTML e seus componentes. Para isso veremos algumas boas práticas também.\n\nMas e quando não podemos usar o cache de página ? Como por exemplo páginas com conteúdo dinâmico, e usuário autenticado?\n\nVamos ver as fases do Bootstrap, processamento da URL e onde o Cache entra neste contexto.\n\nE por último, quais as novidades que o Drupal 8 traz, como BigPipe e cache dinâmico, que estão revolucionando os sites Drupal!",
            },
            {
              title: "Automação de testes software é só record play#SQN",
              company: "Ariane Izac",
              description: "Apresentar de forma descontraída diretrizes para automação de teste de software, mostrando a importância da estruturação dos testes automáticos antes de criá-los.\n\nÉ baseado no post que publiquei no blog da MATERA Systems: http://www.matera.com/br/2015/07/10/automacao-de-testes-de-software-e-so-record-and-play-sqn/ ",
            },
        ]
      },
      {
        time: "11h30",
        presentations: [
            {
              title: "Construção e provisionamento de ambientes de desenvolvimento virtualizados",
              company: "Thiago Rodrigues",
              description: "Quantas vezes você escutou frases como \"funciona na minha máquina\" e \"preciso de 1 ou 2 dias para configurar meu ambiente\"? Esqueça isso! Nessa palestra você vai aprender a criar ambientes de desenvolvimento virtualizados semelhantes (ou iguais) ao que você tem em produção usando Vagrant e Docker Compose.\n\nTais ferramentas automatizam o provisionamento e garantem que todos os desenvolvedores tenham exatamente o mesmo ambiente, eliminando o processo de construção manual - que é lento e suscetível a erros.",
            },
            {
              title: "Fazendo Drupal com administração em mente",
              company: "Marcelo Soares",
              description: "Drupal é genial, mas recorrentemente temos clientes insatisfeitos com a interface \"muito complicada\", \"confusa\", \"difícil\". Claro, para quem desenvolve o site, tudo faz sentido, mas a pessoa que vai administrar realmente o site dificilmente é alguém técnico na área.\n\nNessa palestra apresentarei alguns conceitos para se ter em mente quando estivermos construindo o site, bem como possíveis soluções para problemas comuns, bem como usar seus módulos.",
            },
            {
              title: "Os pecados mortais de escalabilidade em Drupal e seus efeitos nos negócios",
              company: "Handrus Nogueira / Mayara Campos",
              description: "\"Quem não conhece a história esta fadado a repetir seus erros\". É raro um evento sobre tecnologia trazer uma palestra falando de erros e problemas da mesma. Mas é nossa obrigação moral contribuir de volta, impedir que esses erros aconteçam de novo e ajudar a construir um futuro aonde eles não se repitam.\n\nNessa palestra mostraremos alguns erros e o esforço para contorná-los na maior plataforma de Crowdfunding do Brasil a Kickante. Queremos mostrar como evitar erros, sugerir melhorias para o Drupal 8 e compartilhar nossas lições aprendidas. Senta que lá vem história!",
            },
            {
              title: "Hooks, plugins, eventos e serviços, como usar tudo isso no Drupal 8?",
              company: "Felipe Ribeiro",
              description: "Uma grande parte do apelo do Drupal reside na sua flexibilidade. O desenvolvedor pode alterar, ampliar e melhorar quase qualquer aspecto do Drupal sem ter que hackear o core. Historicamente essa versatilidade tem sido possível através das hooks, que são funções PHP executadas em pontos específicos durante uma requisição. Mas os tempos estão mudando, e o Drupal 8 oferece uma variedade de novos padrões que todos os desenvolvedores de módulos deverão para aprender e entender.\n\nNessa sessão, pretendo responde a perguntas como:\n\n- O que são hooks, plugins, eventos e serviços?\n\n- O que cada um deles procura resolver?\n\n- O que usar e quando?",
            },
            {
              title: "Drupal e a Qualidade de Software",
              company: "Daniel Carvalhinho",
              description: "Quantas vezes você precisou lidar com achar e corrigir bugs mesmo meses depois do desenvolvimento?\nQuantas vezes o seu budget estourou pois nem todos os cenários foram cobertos pelos desenvolvedores nos seus testes?\n\nNesta palestra vamos ver como uma pessoa ou time dedicada ao controle de qualidade pode trabalhar com o gerente do projeto e/ou líder técnico/arquiteto para garantir uma melhor cobertura de casos de usos e testes em múltiplos projetos, e como isso impactará a entrega final.\n\nIsso não é um ataque aos desenvolvedores. Eu também sou um desenvolvedor!\nMas já passou o momento de levarmos QA mais a sério durante o desenvolvimento.",
            },
        ]
      },
      {
        name: "Almoço",
        time: "12h30"
      },
      {
        time: "14h00",
        presentations: [
            {
              title: "Batch Process - Behind the Scenes",
              company: "André Boscatto / Vicente Eugenio",
              description: "Nesta palestra mostraremos como o uso de ferramentas Drupal para execução de jobs server-side podem ser práticas, simples e eficazes.\nA proposta é abrir novos horizontes para solução de problemas que requerem processamento de grande carga visando utilizar ferramentas Drupal.\n\nDemonstraremos de forma prática como foi realizada a implementação server-side de um serviço capaz de criar pacotes ZIP com 4GB de dados, arquivos CSV com mais de 23.000 linhas, evitando timeouts e queda do servidor, por meio da utilização de Cron, Batch, Queue e Drush.",
            },
            {
              title: "Evite erros comuns em projetos Drupal",
              company: "João Paulo",
              description: "Com experiência de 6 anos em Drupal, vi vários erros/enganos comuns que se repetiam constantemente em vários projetos, como podemos evitá-los?\n\nNessa palestra vou elencar algumas soluções possíveis de como podemos resolver tais problemas.\n\nVenha e também compartilhe seus problemas e soluções.",
            },
            {
              title: "A Arte do Começo - Como construir uma DrupalShop",
              company: "Frederico Schillings Ferrer",
              description: "Direto da DrupalCom Bogotá para a Drupalcamp Campinas. Começar a partir do nada é um grande desafio, mas com uma cultura de inovação, melhoria contínua e respeitando as pessoas, qualquer um pode fazê-lo. Motivar e inspirar as pessoas que pretendem iniciar ou que já estão na estrada há algum tempo é o objetivo principal da palestra.\n\nQuero compartilhar um pouco de experiência de fundar uma DrupalShop sem qualquer investimento financeiro particular, quais foram as estratégias, decisões cruciais, momentos de tensão e grandes realizações que tivemos nesses 4 anos de empresa. Seguem os temas que vamos cobrir durante a palestra: Lean startup, Business Model Canvas, Cultura Lean e Ágil, Gestão 3.0, Inovação, Marketing digital, Marketing de conteúdo, Motivação e Inspiração.",
            },
            {
              title: "Desacoplando Drupal 8 e ReactJS",
              company: "Sebastian Ferrari",
              description: "A maneira como lidamos com as variabilidades na estratégia de negocio vão ditar grande parte de nosso sucesso. Em sistemas monolíticos como o Drupal com o tempo, mudanças se tornam decisões de grande risco, resultando em entregas lentas e custosas.\n\nPerante essa necessidade decidimos desacoplar o Drupal de maneira progressiva movendo a responsabilidade de renderização do HTML e interatividade para o ReactJS.\n\nMas o ReactJS por ser uma biblioteca, devemos usar outras como React Router para o roteamento, Redux para gerenciar o estado da aplicação e Webpack para agregação e utilização de outras ferramentas como Babel.\n\nVou mostrar quais foram os desafios, soluções e o resultado ao optar por uma arquitetura desacoplada usando ReactJS.",
            },
            {
              title: "Como contribuir para a comunidade poder ser bom para sua carreira",
              company: "Rodrigo Wanderley de Melo Cardoso",
              description: "Como usuários de código livre, muitas vezes consumimos muito conteúdo produzido pela comunidade, mas, o que damos em troca? E em que dar algo em troca para a comunidade pode ser benéfico para nossa carreira? Nessa palestra você vai entender como ajudar a comunidade e como crescer como profissional de TI.",
            },
        ]
      },
      {
        time: "15h00",
        presentations: [
            {
              title: "Relatórios de alta performance com Apache Solr",
              company: "Luiz Petri",
              description: "Se você já teve que fazer um relatório com muitos campos e/ou registros. Provavelmente já teve que se preocupar com a performance e escalabilidade da sua solução.\n\nCom a utilização de módulos da comunidade e Apache Solr, é possível implementar  uma solução robusta e totalmente integrada com Drupal.",
            },
            {
              title: "Funcionamento básico das camadas de cache",
              company: "Leonardo Torati",
              description: "Descrever como funciona o cache interno (database, memcached) e a integração com outras camadas de cache como o Varnish e CDNs como o Akamai.",
            },
            {
              title: "Exportando dados denormalizados no Drupal com foco em BI",
              company: "Gabriel Machado",
              description: "Nessa palestra vamos mergulhar em um caso de uso onde o requisito era exportar os dados denormalizados de qualquer entidade no Drupal para um banco de dados externo (BigData) e construir relatórios de negócio personalizados.",
            },
            {
              title: "Arquitetura padrão Drupal 7 e 8. Da Natura e Taller para a comunidade",
              company: "Handrus Nogueira / Jean F. Baro",
              description: "A Natura vem migrando sites e sistemas para Drupal a cerca de um ano e como parte deste trabalho contratou consultores e despendeu várias horas de seus profissionais e parceiros (entre eles a Taller) na montagem de um padrão arquitetural que garante melhores práticas, performance, escalabilidade e acessibilidade de uma forma que não engesse times ágeis.\n\nObjetivos:\n1 - Abrir a arquitetura para a comunidade e disponibilizá-la para edição colaborativa.\n2 - Explanar como a arquitetura pode ser uma ferramenta ágil e não trabalhar contra ela.\n3 - Intenções e fundação de uma nova arquitetura voltada para o Drupal 8, microservices e ReactJS.\n\nA Palestra será apresentada por Jean F. Baro, Arquiteto de Sistemas da Natura e Handrus S Nogueira, Diretor Comercial e Consultor Drupal na Taller.",
            },
            {
              title: "Contribuir é Retribuir",
              company: "Daniel Carvalhinho",
              description: "\"Come for the code, Stay for the community\"\nEsse é o mantra/slogan que move a comunidade Drupal pelo mundo.\n\nO Drupal como todo software livre depende da sua comunidade para sobreviver, e essa comunidade é formada por pessoas com todo tipo de habilidade como escritores, designers, tradutores, desenvolvedores, etc.\nE também por empresas que ajudam seja com patrocínio direto ou com código e/ou liberando o time para contribuir no horário comercial.\n\nSeja como for, antes de tudo vem o sentimento/pensamento de comunidade.\n\nNessa palestra tentarei despertar esse sentimento e mostrarei as diversas formas pelas quais podemos contribuir para o crescimento contínuo do Drupal, retribuindo assim tudo que aprendemos e muitas vezes lucramos com a ajuda de todos que contribuiram antes de nós.",
            }
        ]
      },
      {
        name: "Coffee-break",
        time: "16h00"
      },
      {
        time: "16h30",
        presentations: [
            {
              title: "Depurando aplicações PHP like a BOSS",
              company: "Thiago Rodrigues",
              description: "Esqueça o print_r()! Nessa palestra você vai aprender a depurar aplicações PHP locais e remotas (inclusive em produção!) like a BOSS através de ferramentas como XDebug e XHProf. Ao final, você será capaz de identificar problemas lógicos e de performance com enorme produtividade.",
            },
            {
              title: "Open Fishbowl",
              company: "Discussões abertas entre a comunidade",
              description: "Fishbowl é um modelo de debate aberto que promovê e incentiva a participação da platéia que o assiste. Na prática, haverão 4 cadeiras no palco, das quais 3 estarão ocupadas por voluntários que desejam discutir um determinado assunto, este (e demais outros) que fora anteriormente sugerido pelo próprio público presente.\n\nOs assuntos são debatidos por cerca de 15min, quando então encerra-se o tópico e parti-se para outro. Qualquer pessoa da platéia que desejar participar do debate pode se sentar à cadeira vazia, e algum dos que estavam sentados se voluntaria para deixar uma cadeira vaga novamente. A partir daí o ciclo se repete.",
            },
            {
              title: "Auditando performance, conteúdo e boas práticas em sites Drupal",
              company: "Erick Bonnemasou Jaccoud / André Boscatto",
              description: "Como saber se o seu site Drupal está configurado corretamente, é seguro e usa boas práticas de desenvolvimento?\n\nAlgumas ferramentas úteis:\n- Site Audit: ferramenta de análise estática de código que gera relatórios dando recomendações de boas práticas\n- Security Review: automatiza testes e cobre erros comuns que podem deixar seu site inseguro\n- Coder: verifica padrões de codificação e boas práticas\n- Cache Audit: gera relatório sobre Views, Panels, cache do Drupal e mais\n- Xdebug e XHProf: ferramentas de debug/profiling para PHP",
            },
            {
              title: "Composer 101 e sua integração com Drupal 8",
              company: "Natan Moraes",
              description: "A proposta da palestra é apresentar o Gerenciador de Dependências do PHP para programadores que ainda não o conhecem.\n\nAlguns dos tópicos a serem abordados:\n- Como instalar o Composer\n- Como usar o Composer para baixar as dependências do seu projeto\n- Como usar o packagist.org\n- Como publicar seu projeto no packagist.org\n\nAlém disso, pretendo apresentar como o Drupal 8 se integra com o Composer para facilitar o dia-a-dia dos desenvolvedores.",
            },
            {
              title: "Superando o Gitflow",
              company: "Luiz Henrique Guerra",
              description: "Proposta de workflow de git para projetos de outsourcing com entregas e integrações contínuas e equipes distribuídas.\n\nApesar de não ser diretamente relacionado com Drupal, e muito menos restrito a isso, o conteúdo apresentado poderá ajudar em casos que se vivenciam frequentemente com ele, como o código gerado de exportação de features ou configurações.",
            }
        ]
      },
      {
        time: "17h30",
        presentations: [
            {
              title: "Estudo de Caso: Como utilizamos Containers (Docker) para criar um ambiente completo de desenvolvimento e validações",
              company: "Thomas Bryan",
              description: "A utilização de containers é uma forte tendência de mercado, nessa palestra será mostrado um estudo de caso de como a CI&T implementou uma infraestrutura utilizando dockers para desenvolvimento e validações de código. Assuntos que serão abordados nessa palestra: Dificuldades, pontos positivos e negativos, Continuous Integration, SOLR, Sonar, Acquia, Amazon, Linux, Drupal, Jenkins e NGINX.",
            },
            {
              title: "Open Fishbowl (cont.)",
              company: "Discussões abertas entre a comunidade",
              description: "Fishbowl é um modelo de debate aberto que promovê e incentiva a participação da platéia que o assiste. Na prática, haverão 4 cadeiras no palco, das quais 3 estarão ocupadas por voluntários que desejam discutir um determinado assunto, este (e demais outros) que fora anteriormente sugerido pelo próprio público presente.\n\nOs assuntos são debatidos por cerca de 15min, quando então encerra-se o tópico e parti-se para outro. Qualquer pessoa da platéia que desejar participar do debate pode se sentar à cadeira vazia, e algum dos que estavam sentados se voluntaria para deixar uma cadeira vaga novamente. A partir daí o ciclo se repete.",
            },
            {
              title: "Como a Natura vem diminuindo seu custo de operação total com Drupal",
              company: "Handrus Nogueira / Augusto Knijnik",
              description: "Comparar somente o custo de desenvolvimento ou aquisição de um software geralmente conta menos da metade da história. É preciso considerar que existe um custo envolvido em manter, assegurar, operar e até mesmo utilizar um software.\n\nNesta palestra vamos verificar como o Drupal pode diminuir seu TCO (Total Cost of Ownership) e como utilizar esta métrica para medir o real sucesso de um projeto e sua aderência como solução dos problemas que busca resolver.",
            },
            {
              title: "AJAX on Drupal the right way",
              company: "Nicolás Bouhid",
              description: "O que é o AJAX api? Por qué eu preciso usar ele? Posso usar jQuery.ajax? Descobra os segredos por trais do belo AJAX API.",
            },
            {
              title: "Contribuindo com a comunidade Drupal",
              company: "Fernando Katsukawa",
              description: "Nessa palestra iremos conhecer algumas formas de contribuir com a comunidade Drupal, seja codificando, ajudando outras pessoas da comunidade com suas dúvidas, criando artigos, tornando-se um membro da associação Drupal, etc.",
            }
        ]
      },
      {
        name: "Encerramento + Agradecimentos",
        time: "18h30"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "CI&T",
        logo: "themes/drupalcamp-cps/img/logo_ciandt.jpg",
        url: "http://ciandt.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Metrocamp",
        logo: "themes/drupalcamp-cps/img/metrocamp_logo.png",
        url: "http://metrocamp.com.br"
      },
      {
        name: "Acquia",
        logo: "themes/drupalcamp-cps/img/acquia_logo.png",
        url: "http://acquia.com"
      },
      {
        name: "Associação Drupal Brasil - ADB",
        logo: "themes/drupalcamp-cps/img/adb_logo.png",
        url: "http://drupal.org.br"
      },
      {
        name: "Chuva Inc.",
        logo: "themes/drupalcamp-cps/img/logo_chuva.png",
        url: "https://chuva-inc.com.br/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
