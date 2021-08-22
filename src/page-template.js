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

const generateEngineer = engrArr => {
    if(engrArr.length === 0){
        return '';
    }

    let htmlContent = ``;
    for(let i=0; i<engrArr.length; i++){
        htmlContent += `<div class="card col-3 p-0 m-2">
        <div class="card-header bg-primary">
            <h3>${engrArr[i].getName()}</h3>
            <p>${engrArr[i].getRole()}</p>
        </div>
        <div class="card-content">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engrArr[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engrArr[i].getEmail()}">${engrArr[i].getEmail()}</a></li>
                <li class="list-group-item">Github Profile: <a href="https://github.com/${engrArr[i].getGithub()}" target="_blank">${engrArr[i].getGithub()}</a></li>
            </ul>
        </div>
        </div>
    `;
    }

    return htmlContent;
    
}

const generateIntern = internArr => {
    if(internArr.length === 0){
        return '';
    }

    let htmlContent = ``;
    for(let i=0; i<internArr.length; i++){
        htmlContent += `<div class="card col-3 p-0 m-2">
        <div class="card-header bg-primary">
            <h3>${internArr[i].getName()}</h3>
            <p>${internArr[i].getRole()}</p>
        </div>
        <div class="card-content">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${internArr[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${internArr[i].getEmail()}">${internArr[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${internArr[i].getSchool()}</li>
            </ul>
        </div>
        </div>
    `;
    }

    return htmlContent;
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
            <div class="row justify-content-center">
                ${generateEngineer(engrArr)}
            </div>
            <div class="row justify-content-center">
                ${generateIntern(internArr)}
            </div>
            
        </main>
      </body>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </html>
      `;
}