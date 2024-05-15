function generateTable() {

    const oldTable = document.getElementById("table1");
    if(oldTable != null){oldTable.remove()}
    

    // Créer les élément <table> et <tbody> 
    const tbl = document.createElement("table");
    tbl.id = "table1";
    const tblBody = document.createElement("tbody");
  
    //Créer les entête
    const nbColonne = 2
    const nbLigne = 10
    const ligneEntete = document.createElement("tr");
    for (let c = 0; c < nbColonne; c++) {
        const cell = document.createElement("td");
            cell.classList.add("cellEntete");
            cell.classList.add(`col${c+1}`);

        const cellText = document.createTextNode(`Colonne ${c+1}` + new Date());
        cell.appendChild(cellText);
        ligneEntete.appendChild(cell);
    }
    tblBody.appendChild(ligneEntete);

    // Boucler autant de fois que l'on veux de ligne
    for (let l = 0; l < nbLigne; l++) {

      // Créer les élément <tr> (les lignes de la table)
      const row = document.createElement("tr");
  
      for (let c = 0; c < nbColonne; c++) {
        // Créer une constante cell de type <td> (cellule de table)
        // Créer une constante cellText de type <TexteNode> et la remplir ave le texte de son choix
        // Insérer le texteNode dans la cellule
        // Insérer la cellule dans la ligne
        const cell = document.createElement("td");
        cell.classList.add("cellCorp");
        cell.classList.add(`col${c+1}`);

        const cellText = document.createTextNode(`l= ${l}, c= ${c}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // Insérer la ligne dans le corp de la table
      tblBody.appendChild(row);
    }
  
    // Insérer le corp de la table dans la table
    tbl.appendChild(tblBody);

    // Insérer la table dans le body de la page html
    document.body.appendChild(tbl);
    
  }
  