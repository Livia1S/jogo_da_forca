const letras = document.querySelectorAll("[data-letra]");
const iniciar = document.querySelector("#iniciar");
//const busca = document.querySelector(".livro");
const mensagem = document.querySelector(".frase");
const p = document.querySelector(".sugestao-titulo");
const sessao = document.querySelector(".palavras");

//const dialog = document.querySelector("dialog");
//console.log(dialog);
//const cancelButton = document.querySelector("#teste_inicio");

let verf = "";

const clickDisable = document.querySelector(".botoes");

const canvas = document.getElementById("stick");
const ctx = canvas.getContext("2d");

const alfabeto = "aãáâbcçdeéêfghiíjklmnñoõóôpqrstuúvwxyz ";

const palavraSecreta = [
  (plv001 = {
    livro: "Macunaíma",
    autor: "Mário de Andrade",
  }),
  (plv002 = {
    livro: "Grande Sertão Veredas",
    autor: "Guimarães Rosa",
  }),
  (plv003 = {
    livro: "Quarup",
    autor: "Antonio Callado",
  }),
  (plv004 = {
    livro: "Livro das Mil e Uma Noites",
    autor: "Contos Populares",
  }),
  (plv005 = {
    livro: "Dom Casmurro",
    autor: "Machado de Assis",
  }),
  (plv006 = {
    livro: "O Cortiço",
    autor: "Aluísio Azevedo",
  }),
  (plv007 = {
    livro: "Gabriela Cravo e Canela",
    autor: "Jorge Amado",
  }),
  (plv008 = {
    livro: "Vestido de Noiva",
    autor: "Nelson Rodrigues",
  }),
  (plv009 = {
    livro: "Vidas Secas",
    autor: "Graciliano Ramos",
  }),
  (plv010 = {
    livro: "A Guerra dos Tronos",
    autor: "George R. R. Martin",
  }),
  (plv011 = {
    livro: "A Paixão Segundo GH",
    autor: "Clarice Lispector",
  }),
  (plv012 = {
    livro: "A Moreninha",
    autor: "Joaquim Manuel de Macedo",
  }),
  (plv013 = {
    livro: "Iracema",
    autor: "José de Alencar",
  }),
  (plv014 = {
    livro: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
  }),
  (plv015 = {
    livro: "O Ateneu",
    autor: "Raul Pompeia",
  }),
  (plv016 = {
    livro: "As Três Marias",
    autor: "Raquel de Queiroz",
  }),
  (plv017 = {
    livro: "Os Sertões",
    autor: "Euclides da Cunha",
  }),
  (plv018 = {
    livro: "O Guarani",
    autor: "José de Alencar",
  }),
  (plv019 = {
    livro: "Incidente em Antares",
    autor: "Erico Veríssimo",
  }),
  (plv020 = {
    livro: "Quarto de Despejo",
    autor: "Carolina Maria de jesus",
  }),
  (plv021 = {
    livro: "Morte e Vida Severina",
    autor: "João Cabral de Melo Neto",
  }),
  (plv022 = {
    livro: "Romance da Pedra do Reino",
    autor: "Ariano Suassuna",
  }),
  (plv023 = {
    livro: "Felicidade Clandestina",
    autor: "Clarice Lispector",
  }),
  (plv024 = {
    livro: "Capitães de Areia",
    autor: "Jorge Amado",
  }),
  (plv025 = {
    livro: "O Quinze",
    autor: "Raquel de Queiroz",
  }),
  (plv026 = {
    livro: "A Rosa do Povo",
    autor: "Carlos Drummond de Andrade",
  }),
  (plv027 = {
    livro: "Memórias de Um Sargento de Milícias",
    autor: "Manuel Antônio de Almeida",
  }),
  (plv028 = {
    livro: "Noite na Taverna",
    autor: "Álvares de Azevedo",
  }),
  (plv029 = {
    livro: "Romanceiro da Inconfidência",
    autor: "Cecília Meireles",
  }),
  (plv030 = {
    livro: "O Pagador de Promessas",
    autor: "Dias Gomes",
  }),
  (plv031 = {
    livro: "Triste Fim de Policarpo Quaresma",
    autor: "Lima Barreto",
  }),
  (plv032 = {
    livro: "O Tempo e o Vento",
    autor: "Érico Veríssimo",
  }),
  (plv033 = {
    livro: "Fogo Morto",
    autor: "José Lins do Rego",
  }),
  (plv034 = {
    livro: "Lavoura Arcaica",
    autor: "Raduan Nassar",
  }),
  (plv035 = {
    livro: "O Coronel e o Lobisomem",
    autor: "José Cândido de Carvalho",
  }),
  (plv036 = {
    livro: "Antes do Baile Verde",
    autor: "Lygia Fagundes Telles",
  }),
  (plv037 = {
    livro: "Viva o Povo Brasileiro",
    autor: "João Ubaldo Ribeiro",
  }),
  (plv038 = {
    livro: "Sagarana",
    autor: "Guimarães Rosa",
  }),
  (plv039 = {
    livro: "Quincas Borba",
    autor: "Machado de Assis",
  }),
  (plv040 = {
    livro: "Feliz Ano Novo",
    autor: "Rubem Fonseca",
  }),
  (plv041 = {
    livro: "São Bernardo",
    autor: "Graciliano Ramos",
  }),
  (plv042 = {
    livro: "A Hora da Estrela",
    autor: "Clarice Lispector",
  }),
  (plv043 = {
    livro: "Casa Grande e Senzala",
    autor: "Gilberto Freyre",
  }),
  (plv044 = {
    livro: "Memórias do Cárcere",
    autor: "Graciliano Ramos",
  }),
  (plv045 = {
    livro: "Budapeste",
    autor: "Chico Buarque",
  }),
  (plv046 = {
    livro: "Raízes do Brasil",
    autor: "Sérgio Buarque de Holanda",
  }),
  (plv047 = {
    livro: "O Encontro Marcado",
    autor: "Fernando Sabino",
  }),
  (plv048 = {
    livro: "Zero",
    autor: "Ignácio de Loyola Brandão",
  }),
  (plv049 = {
    livro: "As Meninas",
    autor: "Lygia Fagundes Telles",
  }),
  (plv050 = {
    livro: "Baú de Ossos",
    autor: "Pedro Nava",
  }),
  (plv051 = {
    livro: "A Alma Encantadora das Ruas",
    autor: "João do Rio",
  }),
  (plv052 = {
    livro: "A República dos Sonhos",
    autor: "Nélida Piñon",
  }),
  (plv053 = {
    livro: "Um Copo de Cólera",
    autor: "Raduan Nassar",
  }),
  (plv054 = {
    livro: "Olga",
    autor: "Fernando Morais",
  }),
  (plv055 = {
    livro: "Corações Sujos",
    autor: "Fernando Morais",
  }),
  (plv056 = {
    livro: "Os Últimos Soldados da Guerra Fria",
    autor: "Fernando Morais",
  }),
  (plv057 = {
    livro: "Senhora",
    autor: "José de Alencar",
  }),
  (plv058 = {
    livro: "Terras do Sem Fim",
    autor: "Jorge Amado",
  }),
  (plv059 = {
    livro: "A Lua vem da Ásia",
    autor: "Campos de Carvalho",
  }),
  (plv060 = {
    livro: "Crônica da Casa Assassinada",
    autor: "Lúcio Cardoso",
  }),
  (plv061 = {
    livro: "O Risco do Bordado",
    autor: "Autran Dourado",
  }),
  (plv062 = {
    livro: "O Sorriso do Lagarto",
    autor: "João Ubaldo Ribeiro",
  }),
  (plv063 = {
    livro: "Sargento Getúlio",
    autor: "João Ubaldo Ribeiro",
  }),
  (plv064 = {
    livro: "Quarenta Dias",
    autor: "Maria Valéria Rezende",
  }),
  (plv065 = {
    livro: "Barba Ensopada de Sangue",
    autor: "Daniel Galera",
  }),
  (plv066 = {
    livro: "Catatau",
    autor: "Paulo Leminski",
  }),
  (plv067 = {
    livro: "O Vampiro de Curitiba",
    autor: "Dalton Trevisan",
  }),
  (plv068 = {
    livro: "Os Cavalinhos de Platiplanto",
    autor: "José Veiga",
  }),
  (plv069 = {
    livro: "O Ventre",
    autor: "Carlos Heitor Cony",
  }),
  (plv070 = {
    livro: "Eu e Outras Poesias",
    autor: "Augusto dos Anjos",
  }),
  (plv071 = {
    livro: "Angústia",
    autor: "Graciliano Ramos",
  }),
  (plv072 = {
    livro: "Iaiá Garcia",
    autor: "Machado de Assis",
  }),
  (plv073 = {
    livro: "Memorial de Aires",
    autor: "Machado de Assis",
  }),
  (plv074 = {
    livro: "Brás Bexiga e Barra Funda",
    autor: "Antônio de Alcântara Machado",
  }),
  (plv075 = {
    livro: "A Obscena Senhora D",
    autor: "Hilda Hilst",
  }),
  (plv076 = {
    livro: "A Casa dos Budas Ditosos",
    autor: "João Ubaldo Ribeiro",
  }),
  (plv077 = {
    livro: "Corpo de Baile",
    autor: "Guimarães Rosa",
  }),
  (plv078 = {
    livro: "A Vida como Ela é",
    autor: "Nelson Rodrigues",
  }),
  (plv079 = {
    livro: "A Escrava Isaura",
    autor: "Bernardo Guimarães",
  }),
  (plv080 = {
    livro: "Mar Morto",
    autor: "Jorge Amado",
  }),
  (plv081 = {
    livro: "O Feijão e o Sonho",
    autor: "Orígenes Lessa",
  }),
  (plv082 = {
    livro: "Tereza Batista Cansada de Guerra",
    autor: "Jorge Amado",
  }),
  (plv083 = {
    livro: "Quase Memória",
    autor: "Carlos Heitor Cony",
  }),
  (plv084 = {
    livro: "Cinzas do Norte",
    autor: "Milton Hatoum",
  }),
  (plv085 = {
    livro: "O Filho Eterno",
    autor: "Cristovão Tezza",
  }),
  (plv086 = {
    livro: "O Cheiro do Ralo",
    autor: "Lourenço Mutarelli",
  }),
  (plv087 = {
    livro: "O Buraco na Parede",
    autor: "Rubem Fonseca",
  }),
  (plv088 = {
    livro: "Agosto",
    autor: "Rubem Fonseca",
  }),
  (plv089 = {
    livro: "O Alquimista",
    autor: "Paulo Coelho",
  }),
  (plv090 = {
    livro: "Diário de Um Mago",
    autor: "Paulo Coelho",
  }),
  (plv091 = {
    livro: "Ciranda de Pedra",
    autor: "Lygia Fagundes Telles",
  }),
  (plv092 = {
    livro: "Pauliceia Desvairada",
    autor: "Mário de Andrade",
  }),
  (plv093 = {
    livro: "Invenção de Orfeu",
    autor: "Jorge de Lima",
  }),
  (plv094 = {
    livro: "Laços de Família",
    autor: "Clarice Lispector",
  }),
  (plv095 = {
    livro: "Torto Arado",
    autor: "Itamar Vieira Junior",
  }),
  (plv096 = {
    livro: "Estorvo",
    autor: "Chico Buarque",
  }),
  (plv097 = {
    livro: "Lucíola",
    autor: "José de Alencar",
  }),
  (plv098 = {
    livro: "Dona Flor e seus Dois Maridos",
    autor: "Jorge Amado",
  }),
  (plv099 = {
    livro: "Bagagem",
    autor: "Adélia Prado",
  }),
  (plv100 = {
    livro: "Memorial de Maria Moura",
    autor: "Raquel de Queiroz",
  }),
  (plv101 = {
    livro: "Moby Dick",
    autor: "Herman Melville",
  }),
  (plv102 = {
    livro: "Romeu e Julieta",
    autor: "William Shakespeare",
  }),
  (plv103 = {
    livro: "A Divina Comédia",
    autor: "Dante Alighieri",
  }),
  (plv104 = {
    livro: "Ilíada",
    autor: "Homero",
  }),
  (plv105 = {
    livro: "Odisseia",
    autor: "Homero",
  }),
  (plv106 = {
    livro: "O Jogo da Amarelinha",
    autor: "Julio Cortázar",
  }),
  (plv107 = {
    livro: "A Metamorfose",
    autor: "Franz Kafka",
  }),
  (plv108 = {
    livro: "O Mahabharata",
    autor: "Krishna Dvapayana Vyasa",
  }),
  (plv109 = {
    livro: "Hamlet",
    autor: "William Shakespeare",
  }),
  (plv110 = {
    livro: "Dom Quixote",
    autor: "Miguel de Cervantes",
  }),
  (plv111 = {
    livro: "Em Busca do Tempo Perdido",
    autor: "Marcel Proust",
  }),
  (plv112 = {
    livro: "Guerra e Paz",
    autor: "Liev Tolstói",
  }),
  (plv113 = {
    livro: "Crime e Castigo",
    autor: "Fiódor Dostoiévski",
  }),
  (plv114 = {
    livro: "Ulysses",
    autor: "James Joyce",
  }),
  (plv115 = {
    livro: "Madame Bovary",
    autor: "Gustave Flaubert",
  }),
  (plv116 = {
    livro: "O Processo",
    autor: "Franz Kafka",
  }),
  (plv117 = {
    livro: "A Montanha Mágica",
    autor: "Thomas Mann",
  }),
  (plv118 = {
    livro: "As Flores do Mal",
    autor: "Charles Baudelaire",
  }),
  (plv119 = {
    livro: "O Som e a Fúria",
    autor: "William Faulkner",
  }),
  (plv120 = {
    livro: "O Príncipe",
    autor: "Nicolau Maquiavel",
  }),
  (plv121 = {
    livro: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
  }),
  (plv122 = {
    livro: "Os Miseráveis",
    autor: "Victor Hugo",
  }),
  (plv123 = {
    livro: "O Estrangeiro",
    autor: "Albert Camus",
  }),
  (plv124 = {
    livro: "A Origem das Espécies",
    autor: "Charles Darwin",
  }),
  (plv125 = {
    livro: "Adeus às Armas",
    autor: "Ernest Hemingway",
  }),
  (plv126 = {
    livro: "Coração das Trevas",
    autor: "Joseph Conrad",
  }),
  (plv127 = {
    livro: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
  }),
  (plv128 = {
    livro: "Mrs Dalloway",
    autor: "Virginia Woolf",
  }),
  (plv129 = {
    livro: "Histórias Extraordinárias",
    autor: "Edgar Allan Poe",
  }),
  (plv130 = {
    livro: "A Comédia Humana",
    autor: "Honoré de Balzac",
  }),
  (plv131 = {
    livro: "Os Vestígios do Dia",
    autor: "Kazuo Ishiguro",
  }),
  (plv132 = {
    livro: "As Brasas",
    autor: "Sándor Márai",
  }),
  (plv133 = {
    livro: "Grandes Esperanças",
    autor: "Charles Dickens",
  }),
  (plv134 = {
    livro: "O Homem sem Qualidades",
    autor: "Robert Musil",
  }),
  (plv135 = {
    livro: "Viagens de Gulliver",
    autor: "Jonathan Swift",
  }),
  (plv136 = {
    livro: "Os Lusíadas",
    autor: "Luís de Camões",
  }),
  (plv137 = {
    livro: "Os Três Mosqueteiros",
    autor: "Alexandre Dumas",
  }),
  (plv138 = {
    livro: "Decameron",
    autor: "Boccaccio",
  }),
  (plv139 = {
    livro: "Esperando Godot",
    autor: "Samuel Beckett",
  }),
  (plv140 = {
    livro: "Lolita",
    autor: "Vladimir Nabokov",
  }),
  (plv141 = {
    livro: "Paraíso Perdido",
    autor: "John Milton",
  }),
  (plv142 = {
    livro: "Robinson Crusoé",
    autor: "Daniel Defoe",
  }),
  (plv143 = {
    livro: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
  }),
  (plv144 = {
    livro: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
  }),
  (plv145 = {
    livro: "Vinte Mil Léguas Submarinas",
    autor: "Júlio Verne",
  }),
  (plv146 = {
    livro: "Fausto",
    autor: "Goethe",
  }),
  (plv147 = {
    livro: "Doutor Fausto",
    autor: "Thomas Mann",
  }),
  (plv148 = {
    livro: "O Vermelho e o Negro",
    autor: "Stendhal",
  }),
  (plv149 = {
    livro: "Eneida",
    autor: "Virgílio",
  }),
  (plv150 = {
    livro: "Retrato de uma Senhora",
    autor: "Henry James",
  }),
  (plv151 = {
    livro: "Mensagem",
    autor: "Fernando Pessoa",
  }),
  (plv152 = {
    livro: "Os Moedeiros Falsos",
    autor: "André Gide",
  }),
  (plv153 = {
    livro: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
  }),
  (plv154 = {
    livro: "A Náusea",
    autor: "Jean-Paul Sartre",
  }),
  (plv155 = {
    livro: "A Consciência de Zeno",
    autor: "Italo Svevo",
  }),
  (plv156 = {
    livro: "Ficções",
    autor: "Jorge Luis Borges",
  }),
  (plv157 = {
    livro: "O Rinoceronte",
    autor: "Eugène Ionesco",
  }),
  (plv158 = {
    livro: "A Morte de Virgílio",
    autor: "Hermann Broch",
  }),
  (plv159 = {
    livro: "Folhas de Relva",
    autor: "Walt Whitman",
  }),
  (plv160 = {
    livro: "O Deserto dos Tártaros",
    autor: "Dino Buzzati",
  }),
  (plv161 = {
    livro: "A Ilustre Casa de Ramires",
    autor: "Eça de Queirós",
  }),
  (plv162 = {
    livro: "As Vinhas da Ira",
    autor: "John Steinbeck",
  }),
  (plv163 = {
    livro: "Memórias de Adriano",
    autor: "Marguerite Yourcenar",
  }),
  (plv164 = {
    livro: "O Apanhador no Campo de Centeio",
    autor: "J. D. Salinger",
  }),
  (plv165 = {
    livro: "As Aventuras de Huckleberry Finn",
    autor: "Mark Twain",
  }),
  (plv166 = {
    livro: "O Leopardo",
    autor: "Tomasi di Lampedusa",
  }),
  (plv167 = {
    livro: "Uma Passagem Para a Índia",
    autor: "E. M. Forster",
  }),
  (plv168 = {
    livro: "Orgulho e Preconceito",
    autor: "Jane Austen",
  }),
  (plv169 = {
    livro: "Pais e Filhos",
    autor: "Ivan Turguêniev",
  }),
  (plv170 = {
    livro: "As Cidades Invisíveis",
    autor: "Italo Calvino",
  }),
  (plv171 = {
    livro: "O Lobo da Estepe",
    autor: "Hermann Hesse",
  }),
  (plv172 = {
    livro: "O Complexo de Portnoy",
    autor: "Philip Roth",
  }),
  (plv173 = {
    livro: "Reparação",
    autor: "Ian McEwan",
  }),
  (plv174 = {
    livro: "Desonra",
    autor: "J. M. Coetzee",
  }),
  (plv175 = {
    livro: "As Irmãs Makioka",
    autor: "Jun'ichiro Tanizaki",
  }),
  (plv176 = {
    livro: "Pedro Páramo",
    autor: "Juan Rulfo",
  }),
  (plv177 = {
    livro: "Frankenstein",
    autor: "Mary Shelley",
  }),
  (plv178 = {
    livro: "O Mundo se Despedaça",
    autor: "Chinua Achebe",
  }),
  (plv179 = {
    livro: "Amada",
    autor: "Toni Morrison",
  }),
  (plv180 = {
    livro: "O Conto da Aia",
    autor: "Margaret Atwood",
  }),
  (plv181 = {
    livro: "A Revolução dos Bichos",
    autor: "George Orwell",
  }),
  (plv182 = {
    livro: "Jane Eyre",
    autor: "Charlotte Bronte",
  }),
  (plv183 = {
    livro: "O Sol é Para Todos",
    autor: "Harper Lee",
  }),
  (plv184 = {
    livro: "O Morro dos Ventos Uivantes",
    autor: "Emily Bronte",
  }),
  (plv185 = {
    livro: "Ao Farol",
    autor: "Virginia Woolf",
  }),
  (plv186 = {
    livro: "Anna Kariênina",
    autor: "Liev Tolstói",
  }),
  (plv187 = {
    livro: "Os Contos de Cantuária",
    autor: "Geoffrey Chaucer",
  }),
  (plv188 = {
    livro: "Os Filhos da Meia-Noite",
    autor: "Salman Rushdie",
  }),
  (plv189 = {
    livro: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
  }),
  (plv190 = {
    livro: "O Mestre e a Margarida",
    autor: "Mikhail Bulgákov",
  }),
  (plv191 = {
    livro: "Drácula",
    autor: "Bram Stoker",
  }),
  (plv192 = {
    livro: "A Mão Esquerda da Escuridão",
    autor: "Ursula K. Le Guin",
  }),
  (plv193 = {
    livro: "Um Conto de Natal",
    autor: "Charles Dickens",
  }),
  (plv194 = {
    livro: "Mulherzinhas",
    autor: "Louisa May Alcott",
  }),
  (plv195 = {
    livro: "Orlando",
    autor: "Virginia Woolf",
  }),
  (plv196 = {
    livro: "As Aventuras de Tom Sawyer",
    autor: "Mark Twain",
  }),
  (plv197 = {
    livro: "O Aleph",
    autor: "Jorge Luis Borges",
  }),
  (plv198 = {
    livro: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
  }),
  (plv199 = {
    livro: "Harry Potter",
    autor: "J. K. Rowling",
  }),
  (plv200 = {
    livro: "A Peste",
    autor: "Albert Camus",
  }),
  (plv201 = {
    livro: "O Hobbit",
    autor: "J. R. R. Tolkien",
  }),
  (plv202 = {
    livro: "Rebecca",
    autor: "Daphne du Maurier",
  }),
  (plv203 = {
    livro: "E o Vento Levou",
    autor: "Margaret Mitchell",
  }),
  (plv204 = {
    livro: "David Copperfield",
    autor: "Charles Dickens",
  }),
  (plv205 = {
    livro: "Nada de Novo no Front",
    autor: "Erich Maria Remarque",
  }),
  (plv206 = {
    livro: "Emma",
    autor: "Jane Austen",
  }),
  (plv207 = {
    livro: "Persuasão",
    autor: "Jane Austen",
  }),
  (plv208 = {
    livro: "O Caçador de Pipas",
    autor: "Khaled Hosseini",
  }),
  (plv209 = {
    livro: "O Senhor das Moscas",
    autor: "William Golding",
  }),
  (plv210 = {
    livro: "Razão e Sensibilidade",
    autor: "Jane Austen",
  }),
  (plv211 = {
    livro: "O Amor nos Tempos do Cólera",
    autor: "Gabriel García Márquez",
  }),
  (plv212 = {
    livro: "Ratos e Homens",
    autor: "John Steinbeck",
  }),
  (plv213 = {
    livro: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
  }),
  (plv214 = {
    livro: "Judas o Obscuro",
    autor: "Thomas Hardy",
  }),
  (plv215 = {
    livro: "Oliver Twist",
    autor: "Charles Dickens",
  }),
  (plv216 = {
    livro: "A Redoma de Vidro",
    autor: "Sylvia Plath",
  }),
  (plv217 = {
    livro: "Pergunte ao Pó",
    autor: "John Fante",
  }),
  (plv218 = {
    livro: "Germinal",
    autor: "Émile Zola",
  }),
  (plv219 = {
    livro: "A Feira das Vaidades",
    autor: "William Thackeray",
  }),
  (plv220 = {
    livro: "Atlas de Nuvens",
    autor: "David Mitchell",
  }),
  (plv221 = {
    livro: "A Cor Púrpura",
    autor: "Alice Walker",
  }),
  (plv222 = {
    livro: "Viagem ao Centro da Terra",
    autor: "Júlio Verne",
  }),
  (plv223 = {
    livro: "Um Estudo em Vermelho",
    autor: "Arthur Conan Doyle",
  }),
  (plv224 = {
    livro: "O Cão dos Baskervilles",
    autor: "Arthur Conan Doyle",
  }),
  (plv225 = {
    livro: "Ensaio Sobre a Cegueira",
    autor: "José Saramago",
  }),
  (plv226 = {
    livro: "O Nome da Rosa",
    autor: "Umberto Eco",
  }),
  (plv227 = {
    livro: "O Poder e a Glória",
    autor: "Graham Greene",
  }),
  (plv228 = {
    livro: "A Guerra dos Mundos",
    autor: "H. G. Wells",
  }),
  (plv229 = {
    livro: "O Nome do Vento",
    autor: "Patrick Rothfuss",
  }),
  (plv230 = {
    livro: "Tom Jones",
    autor: "Henry Fielding",
  }),
  (plv231 = {
    livro: "A Vida Modo de Usar",
    autor: "Georges Perec",
  }),
  (plv232 = {
    livro: "O Pêndulo de Foucault",
    autor: "Umberto Eco",
  }),
  (plv233 = {
    livro: "Os Irmãos Karamázov",
    autor: "Fiódor Dostoiévski",
  }),
  (plv234 = {
    livro: "Por Quem os Sinos Dobram",
    autor: "Ernest Hemingway",
  }),
  (plv235 = {
    livro: "Ilusões Perdidas",
    autor: "Honoré de Balzac",
  }),
  (plv236 = {
    livro: "A Filha do Capitão",
    autor: "Alexandre Pushkin",
  }),
  (plv237 = {
    livro: "Bonequinha de Luxo",
    autor: "Truman Capote",
  }),
  (plv238 = {
    livro: "O Poço e o Pêndulo",
    autor: "Edgar Allan Poe",
  }),
  (plv239 = {
    livro: "Ensaio Sobre a Lucidez",
    autor: "José Saramago",
  }),
  (plv240 = {
    livro: "O Segundo Sexo",
    autor: "Simone de Beauvoir",
  }),
  (plv241 = {
    livro: "Demian",
    autor: "Hermann Hesse",
  }),
  (plv242 = {
    livro: "Os Maias",
    autor: "Eça de Queirós",
  }),
  (plv243 = {
    livro: "Terra Sonâmbula",
    autor: "Mia Couto",
  }),
  (plv244 = {
    livro: "Livro do Desassossego",
    autor: "Fernando Pessoa",
  }),
  (plv245 = {
    livro: "As Benevolentes",
    autor: "Jonathan Littlell",
  }),
  (plv246 = {
    livro: "O Diário de Anne Frank",
    autor: "Anne Frank",
  }),
  (plv247 = {
    livro: "Laranja Mecânica",
    autor: "Anthony Burgess",
  }),
  (plv248 = {
    livro: "O Capote",
    autor: "Nikolai Gogol",
  }),
  (plv249 = {
    livro: "Doutor Jivago",
    autor: "Boris Pasternak",
  }),
  (plv250 = {
    livro: "A Máquina de Fazer Espanhóis",
    autor: "Valter Hugo Mãe",
  }),
  (plv251 = {
    livro: "As Aventuras de Sherlock Holmes",
    autor: "Arthur Conan Doyle",
  }),
  (plv252 = {
    livro: "A Época da Inocência",
    autor: "Edith Wharton",
  }),
  (plv253 = {
    livro: "Assassinato no Expresso Oriente",
    autor: "Agatha Christie",
  }),
  (plv254 = {
    livro: "A Insustentável Leveza do Ser",
    autor: "Milan Kundera",
  }),
  (plv255 = {
    livro: "Servidão Humana",
    autor: "W. Somerset Maugham",
  }),
  (plv256 = {
    livro: "A Cidade e os Cachorros",
    autor: "Mario Vargas Llosa",
  }),
  (plv257 = {
    livro: "Auto de Fé",
    autor: "Elias Canetti",
  }),
  (plv258 = {
    livro: "A Ilha Misteriosa",
    autor: "Júlio Verne",
  }),
  (plv259 = {
    livro: "Elogio da Loucura",
    autor: "Erasmo de Roterdã",
  }),
  (plv260 = {
    livro: "As Intermitências da Morte",
    autor: "José Saramago",
  }),
  (plv261 = {
    livro: "A Guerra do Fim do Mundo",
    autor: "Mario Vargas Llosa",
  }),
  (plv262 = {
    livro: "Conversa no Catedral",
    autor: "Mario Vargas Llosa",
  }),
  (plv263 = {
    livro: "Tia Júlia e o Escrevinhador",
    autor: "Mario Vargas Llosa",
  }),
  (plv264 = {
    livro: "O Herói Discreto",
    autor: "Mario Vargas Llosa",
  }),
  (plv265 = {
    livro: "Crônica de Uma Morte Anunciada",
    autor: "Gabriel García Márquez",
  }),
  (plv266 = {
    livro: "Ninguém Escreve ao Coronel",
    autor: "Gabriel García Márquez",
  }),
  (plv267 = {
    livro: "Olhos de Cão Azul",
    autor: "Gabriel García Márquez",
  }),
  (plv268 = {
    livro: "O Evangelho Segundo Jesus Cristo",
    autor: "José Saramago",
  }),
  (plv269 = {
    livro: "Memorial do Convento",
    autor: "José Saramago",
  }),
  (plv270 = {
    livro: "O Homem Duplicado",
    autor: "José Saramago",
  }),
  (plv271 = {
    livro: "A Caverna",
    autor: "José Saramago",
  }),
  (plv272 = {
    livro: "O Perfume",
    autor: "Patrick Suskind",
  }),
  (plv273 = {
    livro: "Americanah",
    autor: "Chimamanda Ngozi",
  }),
  (plv274 = {
    livro: "Crônica do Pássaro de Corda",
    autor: "Haruki Murakami",
  }),
  (plv275 = {
    livro: "Memória de Elefante",
    autor: "António Lobo Antunes",
  }),
  (plv276 = {
    livro: "Morte em Veneza",
    autor: "Thomas Mann",
  }),
  (plv277 = {
    livro: "Mulheres de Cinza",
    autor: "Mia Couto",
  }),
  (plv278 = {
    livro: "A Sangue Frio",
    autor: "Truman Capote",
  }),
  (plv279 = {
    livro: "É Assim que Você a Perde",
    autor: "Junot Díaz",
  }),
  (plv280 = {
    livro: "O Arco Íris da Gravidade",
    autor: "Thomas Pynchon",
  }),
  (plv281 = {
    livro: "O Beijo da Mulher Aranha",
    autor: "Manuel Puig",
  }),
  (plv282 = {
    livro: "O Mestre",
    autor: "Colm Tóibín",
  }),
  (plv283 = {
    livro: "A Amiga Genial",
    autor: "Elena Ferrante",
  }),
  (plv284 = {
    livro: "Duna",
    autor: "Frank Herbert",
  }),
  (plv285 = {
    livro: "Os Detetives Selvagens",
    autor: "Roberto Bolaño",
  }),
  (plv286 = {
    livro: "A História Sem Fim",
    autor: "Michael Ende",
  }),
  (plv287 = {
    livro: "Sandman",
    autor: "Neil Gaiman",
  }),
  (plv288 = {
    livro: "A Mãe",
    autor: "Máximo Gorki",
  }),
  (plv289 = {
    livro: "O Velho e o Mar",
    autor: "Ernest Hemingway",
  }),
  (plv290 = {
    livro: "Os Trabalhadores do Mar",
    autor: "Victor Hugo",
  }),
  (plv291 = {
    livro: "Anatomia de um Instante",
    autor: "Javier Cercas",
  }),
  (plv292 = {
    livro: "Crônicas Saxônicas",
    autor: "Bernard Cornwell",
  }),
  (plv293 = {
    livro: "Paradiso",
    autor: "José Lezama Lima",
  }),
  (plv294 = {
    livro: "O Obsceno Pássaro da Noite",
    autor: "José Donoso",
  }),
  (plv295 = {
    livro: "O Livro da Selva",
    autor: "Rudyard Kipling",
  }),
  (plv296 = {
    livro: "Soldados de Salamina",
    autor: "Javier Cercas",
  }),
  (plv297 = {
    livro: "A Estrada",
    autor: "Cormac McCarthy",
  }),
  (plv298 = {
    livro: "O Iluminado",
    autor: "Stephen King",
  }),
  (plv299 = {
    livro: "O Médico e o Monstro",
    autor: "Robert Louis Stevenson",
  }),
  (plv300 = {
    livro: "Clube da Luta",
    autor: "Chuck Palahniuk",
  }),
];

let tentativas = 0;
let palavraSorteada = "";

function palavraAleatoria(array) {
  let indice = Math.random() * array.length;
  return Math.floor(indice);
}

function validaCliqueDoBotao() {
  for (let i = 0; i < letras.length; i++) {
    letras[i].addEventListener("click", (e) => {
      verificaBotao(e.target.value, palavraSorteada.livro);
    });
  }

  window.addEventListener("keydown", function (event) {
    let tecla = event.key;

    const chave = alfabeto.includes(tecla);
    if (!chave) {
      return;
    }

    verificaBotao(tecla, palavraSorteada.livro);
  });
}

function verificaBotao(botao, palavra) {
  let resultado = palavraSorteada;
  palavra = palavra.toLowerCase();
  console.log(palavra);

  if (tentativas < 7) {
    if (palavra.includes(botao)) {
      document.querySelector(`button[value="${botao}"]`).style.background =
        "#5E8272";
      document.querySelector(`button[value="${botao}"]`).style.color = "white";

      mostraPalavra(palavra, botao);
    } else {
      montaForca(tentativas);
      document.querySelector(`button[value="${botao}"]`).style.background =
        "#7E3D57";
      document.querySelector(`button[value="${botao}"]`).style.color = "white";

      tentativas++;
    }
  } else {
    document.querySelector(
      ".palavras"
    ).innerHTML = `<h2 id='fm'>Fim de Jogo</h2>`;
    cabeca2();
    clickDisable.classList.add("disable");
  }

  revisar();
}

function mostraPalavra(palavras, str) {
  const letra = document.querySelectorAll("p");

  console.log(letra);

  palavras.split("").forEach((palavra, i, arrayPalavra) => {
    if (arrayPalavra[i] === str) {
      letra[i].innerHTML = arrayPalavra[i] = str;
    }
  });
}

function ocultaPalavra(livro) {
  const resultado = livro
    .split("")
    .map((palavra, i) => {
      return `<p>${palavra.replace(livro.charAt(i), (letra) => {
        const verificandoSeTemEspaco = /\s/g.test(letra);

        if (verificandoSeTemEspaco) {
          return " &nbsp ";
        } else {
          return " _ ";
        }
      })}</p>`;
    })
    .join("");
  sessao.innerHTML = `
      <div class="livro">
          ${resultado}
      </div>
  `;
}

iniciar.addEventListener("click", () => {
  //console.log(sessao.childNodes);
  //sessao.childNodes[1].remove();
  const existeH3 = sessao.querySelector("h3");

  if (existeH3 !== null) {
    sessao.querySelector("h3").remove();
  }

  clickDisable.classList.remove("disable");
  ctx.clearRect(0, 0, 400, 600);
  tentativas = 0;
  document.querySelector(".sugestao").value = "";
  //document.querySelector(".palavras").innerHTML = palavraSorteada.livro.toLowerCase();

  /*const existeH2 = sessao.querySelector("h2");

  if (existeH2 !== null) {
    sessao.querySelector("h2").innerHTML = "";
  }*/

  letras.forEach((elemento) => {
    elemento.style.backgroundColor = "#AAAAAA";
    elemento.style.color = "#000000";
  });

  forca();

  let palavra = palavraAleatoria(palavraSecreta);
  palavraSorteada = palavraSecreta[palavra];
  console.log(palavraSorteada.livro);
  ocultaPalavra(palavraSorteada.livro);
});

/*cancelButton.addEventListener("click", function () {
  clickDisable.classList.remove("disable");
  ctx.clearRect(0, 0, 400, 600);
  tentativas = 0;
  letras.forEach((elemento) => {
    elemento.style.backgroundColor = "#AAAAAA";
    elemento.style.color = "#000000";
  });

  forca();

  let palavra = palavraAleatoria(palavraSecreta);
  palavraSorteada = palavraSecreta[palavra];
  console.log(palavraSorteada.livro);
  ocultaPalavra(palavraSorteada.livro);

  dialog.close();
});*/

function revisar() {
  palavra = palavraSorteada.livro.toLowerCase();
  palavra = palavra.replace(/\s+/g, "");
  const nSpan = document.querySelectorAll("p");

  let novaPalabraOculta = "";

  for (let i = 0; i < nSpan.length; i++) {
    let palavraAtual = nSpan[i].innerText;
    novaPalabraOculta += palavraAtual;
  }

  console.log(novaPalabraOculta);
  console.log(palavraSorteada);

  if (novaPalabraOculta.replace(/\s+/g, "") == palavra) {
    //alert("Ganaste!");

    setTimeout(() => {
      sessao.innerHTML = `<h2 id="prb"> Parabéns! Você venceu!<\h2>`;
      document
        .querySelector(".sugestao-titulo")
        .querySelector("div .sugestao").value = palavraSorteada.autor;
    }, 1000);
    clickDisable.classList.add("disable");
  }

  verf = novaPalabraOculta;
}

validaCliqueDoBotao();

function forca() {
  ctx.beginPath();
  ctx.moveTo(25, 560); //base
  ctx.lineTo(75, 560);
  ctx.stroke();
  ctx.strokeStyle = "black";

  ctx.moveTo(50, 10); //vertical
  ctx.lineTo(50, 560);
  ctx.stroke();

  ctx.moveTo(50, 10); //horizontal
  ctx.lineTo(295, 10);
  ctx.stroke();

  ctx.moveTo(295, 10); //forca
  ctx.lineTo(295, 25);
  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(295, 24);
  ctx.bezierCurveTo(315, 70, 330, 80, 295, 85);

  ctx.stroke();
  ctx.closePath();

  ctx.moveTo(295, 24);
  ctx.bezierCurveTo(275, 70, 260, 80, 295, 85);

  ctx.stroke();
  ctx.closePath();
}

function cabeca() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  let x = 200;
  let y = 100;
  let width = 180;
  let heigth = 180;
  let shoulder = 50;
  let radius = 50;

  ctx.beginPath();
  ctx.moveTo(x + shoulder, y);
  ctx.lineTo(x + width - shoulder, y);
  ctx.arcTo(x + width, y, x + width, y + shoulder, radius);
  ctx.lineTo(x + width, y + heigth - shoulder);
  ctx.arcTo(x + width, y + heigth, x + width - shoulder, y + heigth, radius);
  ctx.lineTo(x + shoulder, y + heigth);
  ctx.arcTo(x, y + heigth, x, y + heigth - shoulder, radius);
  ctx.lineTo(x, y + shoulder);
  ctx.arcTo(x, y, x + shoulder, y, radius);

  ctx.closePath();
  ctx.fillStyle = "#B0A399";
  ctx.fill(); //cabeça

  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.fillStyle = "#000";
  ctx.fillRect(230, 190, 15, 15); //olho direito

  ctx.fillStyle = "#000";
  ctx.fillRect(340, 190, 15, 15); //olho esquerdo

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.moveTo(250, 180); //sobrancelha direita
  ctx.lineTo(230, 170);
  ctx.stroke();

  ctx.moveTo(335, 180); //sobrancelha esquerda
  ctx.lineTo(355, 170);
  ctx.stroke();
  ctx.strokeStyle = "black";

  ctx.beginPath();
  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath(); //boca
  ctx.lineTo(238, 225); //ponto inicial
  ctx.quadraticCurveTo(293, 260, 348, 225); //ponto central e ponto final
  ctx.stroke();
  ctx.closePath();
}

function chapeu() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  ctx.beginPath();
  ctx.fillStyle = "#8E7AFF";
  ctx.arc(290, 110, 70, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  ctx.fill();
  ctx.closePath();
}

function barriga() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  let p = 230;
  let l = 280;
  let larg = 120;
  let alt = 80;
  let omb = 25;
  let rad = 25;

  ctx.beginPath();
  ctx.moveTo(p + omb, l);
  ctx.lineTo(p + larg - omb, l);
  ctx.arcTo(p + larg, l, p + larg, l + omb, rad);
  ctx.lineTo(p + larg, l + alt - omb);
  ctx.arcTo(p + larg, l + alt, p + larg - omb, l + alt, rad);
  ctx.lineTo(p + omb, l + alt);
  ctx.arcTo(p, l + alt, p, l + alt - omb, rad);
  ctx.lineTo(p, l + omb);
  ctx.arcTo(p, l, p + omb, l, rad);

  ctx.closePath();
  ctx.fillStyle = "#452352";
  ctx.fill();
}

function bracoDireito() {
  let b = 215;
  let d = 280;
  let tam = 30;
  let tur = 60;
  let bro = 15;
  let ral = 15;

  ctx.beginPath();
  ctx.moveTo(b + bro, d);
  ctx.lineTo(b + tam - bro, d);
  ctx.arcTo(b + tam, d, b + tam, d + bro, ral);
  ctx.lineTo(b + tam, d + tur - bro);
  ctx.arcTo(b + tam, d + tur, b + tam - bro, d + tur, ral);
  ctx.lineTo(b + bro, d + tur);
  ctx.arcTo(b, d + tur, b, d + tur - bro, ral);
  ctx.lineTo(b, d + bro);
  ctx.arcTo(b, d, b + bro, d, ral);

  ctx.closePath();
  ctx.fillStyle = "#B0A399";
  ctx.fill();
}

function bracoEsquerdo() {
  let t = 330;
  let u = 280;
  let tah = 30;
  let tus = 60;
  let bri = 15;
  let rak = 15;

  ctx.beginPath();
  ctx.moveTo(t + bri, u);
  ctx.lineTo(t + tah - bri, u);
  ctx.arcTo(t + tah, u, t + tah, u + bri, rak);
  ctx.lineTo(t + tah, u + tus - bri);
  ctx.arcTo(t + tah, u + tus, t + tah - bri, u + tus, rak);
  ctx.lineTo(t + bri, u + tus);
  ctx.arcTo(t, u + tus, t, u + tus - bri, rak);
  ctx.lineTo(t, u + bri);
  ctx.arcTo(t, u, t + bri, u, rak);

  ctx.closePath();
  ctx.fillStyle = "#B0A399";
  ctx.fill();
  //ctx.globalCompositeOperation='destination-over';
}

function pernaDireita() {
  ctx.fillStyle = "#FF805F";
  ctx.fillRect(244, 358, 40, 50);
}

function pernaEsquerda() {
  ctx.fillStyle = "#FF805F";
  ctx.fillRect(296, 358, 40, 50);
}

function cabeca2() {
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  let x = 200;
  let y = 100;
  let width = 180;
  let heigth = 180;
  let shoulder = 50;
  let radius = 50;

  ctx.beginPath();
  ctx.moveTo(x + shoulder, y);
  ctx.lineTo(x + width - shoulder, y);
  ctx.arcTo(x + width, y, x + width, y + shoulder, radius);
  ctx.lineTo(x + width, y + heigth - shoulder);
  ctx.arcTo(x + width, y + heigth, x + width - shoulder, y + heigth, radius);
  ctx.lineTo(x + shoulder, y + heigth);
  ctx.arcTo(x, y + heigth, x, y + heigth - shoulder, radius);
  ctx.lineTo(x, y + shoulder);
  ctx.arcTo(x, y, x + shoulder, y, radius);

  ctx.closePath();
  //ctx.stroke();
  ctx.fillStyle = "#B0A399";
  ctx.fill(); //cabeÃ§a

  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.fillStyle = "#000";
  ctx.fillRect(230, 190, 20, 2); //olho direito

  ctx.fillStyle = "#000";
  ctx.fillRect(340, 190, 20, 2); //olho esquerdo

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.moveTo(250, 170); //sobrancelha direita
  ctx.lineTo(230, 180);
  ctx.stroke();

  ctx.moveTo(335, 170); //sobrancelha esquerda
  ctx.lineTo(355, 180);
  ctx.stroke();
  ctx.strokeStyle = "black";

  ctx.beginPath();
  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath(); //boca
  ctx.lineTo(238, 245); //ponto inicial
  //ctx.quadraticCurveTo(293, 260, 348, 225)//ponto central e ponto final
  ctx.quadraticCurveTo(293, 200, 348, 245); //ponto central e ponto final
  ctx.stroke();
  //ctx.strokeStyle = "black"
  ctx.closePath();

  //CHAPEU

  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 5;

  ctx.beginPath();
  ctx.fillStyle = "#8E7AFF";
  ctx.arc(290, 110, 70, (Math.PI / 180) * 0, (Math.PI / 180) * 180, true);
  ctx.fill();
  ctx.closePath();
}

function montaForca(tentativas) {
  switch (tentativas) {
    case 0:
      cabeca();
      break;
    case 1:
      chapeu();
      break;
    case 2:
      barriga();
      break;
    case 3:
      bracoDireito();
      break;
    case 4:
      bracoEsquerdo();
      break;
    case 5:
      pernaDireita();
      break;
    case 6:
      pernaEsquerda();
  }
}
