# DWAPS ABEILLE
L'entreprise **DWAPS Formation** a été créée le 1er Octobre 2015.

Sa vocation est de former des développeurs web et mobile.

Rendez-vous sur le site **[dwaps.fr](http://dwaps.fr "DWAPS")** pour plus d'informations.

---

# Installation

bower install dwaps-abeille

OU

`git clone https://github.com/dwaps/dwaps-abeille`

OU

Téléchargez l'archive zip [https://github.com/dwaps/dwaps-abeille/archive/master.zip](https://github.com/dwaps/dwaps-abeille/archive/master.zip).


## 2. Utilisation

1/ Ajoutez le script à la page html (`<script src="dwaps-abeille/js/dwaps-abeille.min.js"></script>`) à la fin du body. Vous pouvez placer le dossier dwaps-abeille dans votre répertoire de librairies tiers.

2/ Insérez autant de balises `<dwaps-abeille></dwaps-abeille>` que vous souhaitez d'abeilles.

3/ Il y a 2 types de parcours d'abeille (2 classes) : *nerveuse* et *tranquille*

Exemples :

	<dwaps-abeille class="nerveuse"></dwaps-abeille>
	<dwaps-abeille class="tranquille"></dwaps-abeille>

4/ Si vous souhaitez un essaim d'abeille :
	
	<dwaps-abeille class="essaim"></dwaps-abeille>

5/ Par défaut, l'essaim compte 10 abeilles, si vous en souhaitez plus renseignez-le via l'attribut `class` :

	<dwaps-abeille class="essaim 3"></dwaps-abeille>

**Remarque : Par soucis d'optimisation, le nombres d'abeilles est limité à 20 de sorte que si vous renseignez un chiffre suppérieur à 20, celui-ci ne sera pas pris en compte.

---

[® DWAPS Formation - Michael Cornillon](http://dwaps.fr "DWAPS")
