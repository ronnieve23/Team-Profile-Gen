const generateManager = mgrArr => {
    if(!mgrArr){
        return '';
    }

    return `
    <div class="card col-3 p-0 m-2">
        <div class="card-header bg-primary">
            <h3>${mgrArr[0].getName()}</h3>
            <p>${mgrArr[0].getRole()}</p>
        </div>
        <div class="card-content">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${mgrArr[0].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${mgrArr[0].getEmail()}">${mgrArr[0].getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${mgrArr[0].officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

module.exports = (mgrArr, engrArr, internArr) => {

    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
          <h1>My Team</h1>
      </header>
      <main>
          <div class="row justify-content-center">
              ${generateManager(mgrArr)}
          </div>
         
      </main>
    </body>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </html>
    `;
}