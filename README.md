## Fonctionnalités réalisées

* Affichage des personnes en tendance : Fonctionne
* Scroll permet de charger plus de résultats : Non Fonctionnelle
* Recherche de personnes : Call API réalisé, mais cause un bug lors de la recherche de favoris après. La fonction à été mise en commentaire.
* Scroll permet de charger plus de résultats :  Non Fonctionnelle
* Annuler la recherche affiche les personnes en tendance : Non Fonctionnelle
* Un clic redirige sur la page de la personne : Fonctionne
* Affichage des informations générales d'une personne : Fonctionne
* Affichage des médias d'une personne : Non Fonctionnelle
* Possibilité de suivre une personne : Fonctionne
* Possibilité de ne plus suivre une personne : Fonctionne
* Affichage des personnes suivies : Fonctionne
* Un clic redirige sur la page de la personne : Fonctionne


## Remarques éventuelles

L'application à été codée sur un émulateur android (Pixel 3a avec android 10.0+).

La fonction "Recherche par nom" fonctionne lorsqu'elle est décommentée, mais elle cause un problème avec les favoris, j'ai décidé de ne pas la rendre disponible. 
Cela permet d'éviter un crash de l'application, qui n'a pas été corrigé par manque de temps.

Tous les calls API. 

Pour les détails de l'acteur, la page est découpé en deux "scroolsBar" à cause du grands nombres d'informations. Il faut donc faire attention à bien scrool les deux parties car toutes les informations demandées sont affichées.