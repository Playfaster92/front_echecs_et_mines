const joueurs = [
  {
    titre: "Paul Morphy",
    texte: "Paul Morphy (1837-1884) est considéré comme l'un des plus grands génies des échecs. Surnommé « le Mozart des échecs », il a dominé son époque.",
    lien: "https://fr.wikipedia.org/wiki/Paul_Morphy",
    lienTexte: "En savoir plus"
  },
  {
    titre: "Bobby Fischer",
    texte: "Bobby Fischer (1943-2008), champion du monde en 1972, a marqué l'histoire par sa victoire contre Boris Spassky pendant la guerre froide.",
    lien: "https://fr.wikipedia.org/wiki/Bobby_Fischer",
    lienTexte: "Lire sa biographie"
  },
  {
    titre: "Magnus Carlsen",
    texte: "Magnus Carlsen (né en 1990) a été champion du monde de 2013 à 2023. Il est connu pour sa domination et son style universel.",
    lien: "https://fr.wikipedia.org/wiki/Magnus_Carlsen",
    lienTexte: "Découvrir Magnus"
  },
  {
    titre: "Garry Kasparov",
    texte: "Garry Kasparov (né en 1963) est l'un des plus grands champions de tous les temps, célèbre pour ses matchs contre les ordinateurs.",
    lien: "https://fr.wikipedia.org/wiki/Garry_Kasparov",
    lienTexte: "Tout savoir sur Kasparov"
  },
  {
    titre: "Anatoli Karpov",
    texte: "Anatoli Karpov (né en 1951) fut champion du monde de 1975 à 1985 et un modèle de jeu positionnel.",
    lien: "https://fr.wikipedia.org/wiki/Anatoli_Karpov",
    lienTexte: "Voir sa carrière"
  },
  {
    titre: "Judith Polgar",
    texte: "Judith Polgar (née en 1976) est considérée comme la meilleure joueuse d'échecs de l'histoire, ayant battu plusieurs champions du monde.",
    lien: "https://fr.wikipedia.org/wiki/Judit_Polg%C3%A1r",
    lienTexte: "Découvrir Judith Polgar"
  },
  {
    titre: "José Raúl Capablanca",
    texte: "Capablanca (1888-1942), champion du monde de 1921 à 1927, était réputé pour son style simple et efficace.",
    lien: "https://fr.wikipedia.org/wiki/Jos%C3%A9_Ra%C3%BAl_Capablanca",
    lienTexte: "En savoir plus"
  },
  {
    titre: "Mikhail Tal",
    texte: "Mikhail Tal (1936-1992), surnommé le magicien de Riga, était célèbre pour ses sacrifices spectaculaires.",
    lien: "https://fr.wikipedia.org/wiki/Mikha%C3%AFl_Tal",
    lienTexte: "Découvrir ses parties"
  }
];

// Calculer le joueur du jour (1 jour = 1 joueur dans la liste, boucle sur les jours de l'année)
const today = new Date();
const dayOfYear = Math.floor(
  (today - new Date(today.getFullYear(), 0, 0)) / 86400000
);
const joueur = joueurs[dayOfYear % joueurs.length];

// Générer le contenu
const contenu = `
  <h3>${joueur.titre}</h3>
  <p>${joueur.texte}</p>
  <p><a href="${joueur.lien}" target="_blank">${joueur.lienTexte}</a></p>
`;

document.getElementById("contenu-joueur").innerHTML = contenu;
