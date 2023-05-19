export const projetos = [
  {
    id: 1,
    name: "winxo",
    img: "/assets/img/winxo.png",
    description:
      "Le projet consiste à développer une application en Python qui permettra de calculer le plus court chemin pour un chauffeur de camion afin de distribuer l'essence à toutes les stations-service de Winxo situées à Casablanca. ",
    
    stacks: {
      hard: ["python"],
      
      tools: ["Spyder"],
    },
    category: "front end",
    highlighted: false,
  },
  {
    id: 2,
    name: "Gestion des salles et des machines",
    img: "/assets/img/machine.png",
    description:
      "Dans ce projet nous avons réalisé un site web qui permet de gérer les salles et les machines, aussi s'authentifier comme est on un administrateur ou un utilisateur normale, ce projet est réalisé par Laravel. ",
      github: "https://github.com/Nouhaila25/projet.Laravel",
      stacks: {
      hard: ["Laravel"],
      
      tools: [ "VSCode"],
    },
    category: "front end",
    highlighted: true,
  },
  {
    id: 3,
    name: "Pokemon",
    img: "/assets/img/pokemon.webp",
    description:
      "Dans ce projet nous avons réalisé une application React Native qui utilise l'API Pokédex pour afficher une liste de Pokémon sous forme de cartes. Lorsque l'utilisateur clique sur une carte, un popup doit apparaître affichant les caractéristiques du Pokémon sélectionné, telles que le nom, le type, l'image, la taille et le poids.",
      github: "https://github.com/Nouhaila25/Projet_Pokemon",
    stacks: {
      hard: ["React native"],
      
      tools: ["VSCode",],
    },
    category: "front end",
    highlighted: false,
  },
  {
    id: 4,
    name: "Sécurisation de la voix sur IP",
    img: "/assets/img/securisation.jpg",
    description:
      "Nous avons réalisé une application desktop en utilisant JAVA pour la sécurisation de la voix IP. Cette application nécessite deux intervenants : un émetteur et un récepteur. L'émetteur enregistre un message vocal au récepteur. Ce message est chiffré selon l'algorithme (AES, DES, TDES, RC4) et la clé de chiffrement choisis, puis envoyé au récepteur en utilisant les sockets de Java. Le récepteur reçoit l'audio chiffré, le déchiffre selon l'algorithme et la clé de déchiffrement choisis afin de pouvoir l'écouter. ",
    
    stacks: {
      hard: ["Java"],
      
      tools: ["eclipse"],
    },
    category: "front end",
    highlighted: false,
  },
  
];
