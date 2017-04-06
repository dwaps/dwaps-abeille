
var DwapsAbeille = function() {
	this.init();
	this.creerAbeille();
};

DwapsAbeille.prototype = {
	init: function()
	{
		var THIS = this;

		// INCUSION DE DWAPS-ABEILLE.CSS DANS LE HEAD
		var script = document.querySelector("[src*=dwaps-abeille]");
		libFolder = script.src.replace(/(.*)\/dwaps-abeille\/.*/,"$1");

		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = libFolder + "/dwaps-abeille/css/dwaps-abeille.css";
		document.head.appendChild(link);

		// INITIALISATION DES VARIABLES
		this.dwapsAbeille = document.querySelectorAll("dwaps-abeille");
		this.div, this.span;

		// SI UN ESSAIM EST DEMANDE...
		this.isNerveuse = false;
		this.dwapsAbeille.forEach(
			function(abeille)
			{
				THIS.creerEssaim(abeille.className);
			}
		);
	},
	creerAbeille: function(tag, isNerveuse)
	{
		var THIS = this;
		var els = tag ? [document.createElement("dwaps-abeille")] : this.dwapsAbeille;		

		els.forEach(
			function(abeille)
			{
				abeille.style.display = "block";

				// Tete				
				THIS.div = document.createElement("div");
				THIS.span = document.createElement("span");
				THIS.div.className = "tete";
				THIS.span.className = "yeux";
				THIS.div.appendChild(THIS.span);
				abeille.appendChild(THIS.div);

				// Corps
				THIS.div = document.createElement("div");
				THIS.div.className = "corps";
				for(var i in [1,2,3,4,5]) {
					THIS.span = document.createElement("span");
					THIS.div.appendChild(THIS.span);
				}
				abeille.appendChild(THIS.div);
				// Ailes
				for(var i in [1,2]) {
					THIS.div = document.createElement("div");
					THIS.div.className = "ailes";
					abeille.appendChild(THIS.div);
				}

				if(tag) 
				{
					abeille.className = isNerveuse ? "nerveuse" : "tranquille";
					document.body.appendChild(abeille);
				}
			}
		);
	},
	creerEssaim: function(isEssaim, nbAbeilles)
	{
		var THIS = this;

		if(typeof isEssaim === "string" && isEssaim.match("essaim"))
		{
			var clone, nbAbeilles = 10;

			this.dwapsAbeille[0].className += this.isNerveuse ? " nerveuse" : " tranquille";

			if(this.dwapsAbeille[0].className.match(/\d/))
			{
				var tab = this.dwapsAbeille[0].className.split(' ');
				tab.forEach(
					function(classe)
					{
						var nb = parseInt(classe);
						if(nb) nbAbeilles = nb;
					}
				);
			}

			nbAbeilles = parseInt(nbAbeilles);

			if(nbAbeilles > 20) nbAbeilles = 10;

			console.log(nbAbeilles);

			nbAbeilles--; // Celle qui est déjà dans le code compte pour 1 !
			this.creerEssaim(true, nbAbeilles);
		}
		else if(nbAbeilles > 0)
		{
			setTimeout(
				function()
				{
					nbAbeilles--;
					THIS.isNerveuse = !THIS.isNerveuse;
					THIS.creerAbeille(true, THIS.isNerveuse);
					THIS.creerEssaim(true, nbAbeilles);
				},
				Math.floor(Math.random()*1000)
			);
		}
	}
}

new DwapsAbeille();