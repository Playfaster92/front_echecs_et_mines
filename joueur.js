const joueurs = [
  {
    titre: "Paul Morphy",
    texte: "Paul Morphy (1837-1884) est considéré comme l'un des plus grands génies des échecs. Surnommé « le Mozart des échecs », il a dominé son époque.",
    photo: "https://en.wikipedia.org/wiki/Paul_Morphy",
    lien: "https://fr.wikipedia.org/wiki/Paul_Morphy",
    lienTexte: "En savoir plus"
  },
  {
    titre: "Bobby Fischer",
    texte: "Bobby Fischer (1943-2008), champion du monde en 1972, a marqué l'histoire par sa victoire contre Boris Spassky pendant la guerre froide.",
    photo: "https://s3.amazonaws.com/holdenluntz.com/wp-content/uploads/20221013184621/Harry-Benson-Bobby-Fischer-Buenos-Aires.jpg",
    lien: "https://fr.wikipedia.org/wiki/Bobby_Fischer",
    lienTexte: "Lire sa biographie"
  },
  {
    titre: "Magnus Carlsen",
    texte: "Magnus Carlsen (né en 1990) a été champion du monde de 2013 à 2023. Il est connu pour sa domination et son style universel.",
    photo: "https://souffleinedit.com/wp-content/uploads/2024/01/Carlsen_Magnus.jpg",
    lien: "https://fr.wikipedia.org/wiki/Magnus_Carlsen",
    lienTexte: "Découvrir Magnus"
  },
  {
    titre: "Garry Kasparov",
    texte: "Garry Kasparov (né en 1963) est l'un des plus grands champions de tous les temps, célèbre pour ses matchs contre les ordinateurs.",
    photo: "https://www.celebrityspeakers.com.au/content/uploads/2021/01/GarryKasparov-pic.jpg",
    lien: "https://fr.wikipedia.org/wiki/Garry_Kasparov",
    lienTexte: "Tout savoir sur Kasparov"
  },
  {
    titre: "Anatoli Karpov",
    texte: "Anatoli Karpov (né en 1951) fut champion du monde de 1975 à 1985 et un modèle de jeu positionnel.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Zesde_Niemeyer_Jeugdschaaktoernooi_te_Groningen._Antoni_Karpov_%28Rusland%29%2C%2C_Bestanddeelnr_920-9514.jpg/250px-Zesde_Niemeyer_Jeugdschaaktoernooi_te_Groningen._Antoni_Karpov_%28Rusland%29%2C%2C_Bestanddeelnr_920-9514.jpg",
    lien: "https://fr.wikipedia.org/wiki/Anatoli_Karpov",
    lienTexte: "Voir sa carrière"
  },
  {
    titre: "Judith Polgar",
    texte: "Judith Polgar (née en 1976) est considérée comme la meilleure joueuse d'échecs de l'histoire, ayant battu plusieurs champions du monde.",
    photo: "https://worldchesshof.org/wp-content/uploads/2025/02/J_400.jpg",
    lien: "https://fr.wikipedia.org/wiki/Judit_Polg%C3%A1r",
    lienTexte: "Découvrir Judith Polgar"
  },
  {
    titre: "José Raúl Capablanca",
    texte: "Capablanca (1888-1942), champion du monde de 1921 à 1927, était réputé pour son style simple et efficace.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jos%C3%A9_Ra%C3%BAl_Capablanca_young_cr.jpg/250px-Jos%C3%A9_Ra%C3%BAl_Capablanca_young_cr.jpg",
    lien: "https://fr.wikipedia.org/wiki/Jos%C3%A9_Ra%C3%BAl_Capablanca",
    lienTexte: "En savoir plus"
  },
  {
    titre: "Mikhail Tal",
    texte: "Mikhail Tal (1936-1992), surnommé le magicien de Riga, était célèbre pour ses sacrifices spectaculaires.",
    photo: "https://d2rnvyacaewvx6.cloudfront.net/playersimg/mikhail_tal.jpg",
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
<div style="display: flex; align-items: center; gap: 1.5rem;">
    <div>
  <img src=${joueur.photo} class="photo-joueur"/>
  </div>
  <div>
  <h3>${joueur.titre}</h3>
  <p>${joueur.texte}</p>
  <p><a href="${joueur.lien}" target="_blank">${joueur.lienTexte}</a></p>
  </div>
  </div>
`;

document.getElementById("contenu-joueur").innerHTML = contenu;
