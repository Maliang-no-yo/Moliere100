function getPhrase() {
    var listePhrases = new Array(
        "La métonymie : Remplacer un mot par un autre mot qui lui est logiquement associé. Elle consiste par exemple à remplacer le contenu par le contenant. Ex : 'boire un verre'",
        "L’antithèse : Mettre en parallèle deux mots de sens opposés ou très éloignés. Ex :  'Ici c'était le paradis ailleurs l'enfer'",
        "L’anaphore : Répéter un même mot ou un même groupe de mots en début de vers, de phrase ou de membre de phrase. Cela produit un effet d'insistance.",
        "La prétérition : Prétendre ne pas dire tout en disant. Ex : 'Une maison triste, pour ne pas dire sinistre. Je ne rappellerai pas les scandales passés.'",
        "L'asyndète : Absence de lien logique normalement nécessaire. Ex : 'Il travaille beaucoup. Il réussira.'",
        "L'attelage / le zeugme : Coordonne 2 éléments qui ne sont pas sur le même plan. Ex : 'Il prit son chapeau et la porte.'",
        "Le parallélisme : Répète une même construction de pĥrase. Ex : 'Ce vase plein de lait, ce panier plein de fleurs.'",
        "L’euphémisme : Atténuer une idée désagréable en remplaçant un mot par un mot ou une expression qui heurtent moins la sensibilité. Ex : 'Il nous a quittés / Il s'est éteint cette année'",
        "Le chiasme : Disposition d’au moins deux éléments que l’on reprend après les avoir croisés. Ex : 'Il faut manger pour vivre et non pas vivre pour manger'",
        "L'oxymore : Associer deux mots contradictoires, pour susciter la surprise ou créer une nouvelle réalité poétique. Ex : 'Les yeux grand fermés.'",
        "Le pléonasme : Associe deux synonymes, créant ainsi une redondance. Ex : 'le tri selectif'",
        "L’allitération :  Répéter phoniquement une même consonne dans une phrase. Ex : 'Pour qui sont ces serpents qui sifflent sur vos têtes ?'",
        "L'assonance : Répéter phoniquement une même voyelle dans une phrase. Ex : 'Tout m’afflige et me nuit et conspire à me nuire'",
        "L'antonomase : Transformer un nom commun en un nom propre et inversement. Ex : 'un don Juan','un Bic'",
        "La litote : Dire moins pour faire entendre beaucoup plus. Ex :'Ce n'est pas idiot'.",
        "La paronomase : Rapprocher deux mots dont le son ou l’orthographe sont semblables, mais dont le sens est différent. Ex : 'En vivant et en voyant les hommes, il faut que le cœur se brise ou se bronze.'",
        "La périphrase : exprimer une notion en plusieurs mots qui la décrivent au lieu de n’en utiliser qu’un seul. Ex : 'L'Astre de la nuit/La lune'",
        "La syllepse : employer un même mot à la fois au sens propre et au sens figuré. Ex : 'Sais-tu pourquoi les sauvages sont tout nus ? C’est parce que Christophe Colomb les a découverts.'",
        "Un tautogramme : phrase dans laquelle les mots commencent tous par la même lettre. Ex : 'Le loup lacère les lâches lézards.'"

    );

    document.getElementById("phrase").innerHTML = listePhrases[Math.floor(Math.random() * listePhrases.length)];
}

getPhrase();