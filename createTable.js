function generateTable() {
    // Créer les élément <table> et <tbody> 
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // Boucler autant de fois que l'on veux de ligne
    for (let i = 0; i < 10; i++) {

      // Créer les élément <tr> (les lignes de la table)
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Créer une constante cell de type <td> (cellule de table)
        // Créer une constante cellText de type <TexteNode> et la remplir ave le texte de son choix
        // Insérer le texteNode dans la cellule
        // Insérer la cellule dans la ligne
        const cell = document.createElement("td");
        if(i===0){
            cell.classList.add("cellEntete");
        } else{
            cell.classList.add("cellCorp");
        }
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
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
  