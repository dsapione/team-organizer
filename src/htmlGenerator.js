

const makeTeam = (team) => {
	const htmlArry = [];
	htmlArry.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => makeManagerCards(manager)));
	htmlArry.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => makeEngineerCards(engineer)).join(''))
	htmlArry.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => makeInternCards(intern)).join(''))
	return htmlArry.join('')
}

const makeInternCards = (intern) => {
	return `
	<!-- Intern Card -->
	<div class="col">
		<div class="card shadow p-3 mb-5 bg-body rounded">
			<div class="card-header text-white bg-primary mb-3">
				<h4>${intern.name}</h4>
				<h5><i class="fas fa-user-graduate"></i> ${intern.role}</h5>
			</div>
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${intern.id}</li>
					<li class="list-group-item">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
					<li class="list-group-item">School: ${intern.school}</li>
				</ul>		
			</div>
		</div>
	</div>`
}

const makeEngineerCards = (engineer) => {
	return `
	<!-- Engineer Card -->
	<div class="col">
		<div class="card shadow p-3 mb-5 bg-body rounded">
			<div class="card-header text-white bg-primary mb-3">
				<h4>${engineer.name}</h4>
				<h5><i class="fas fa-glasses"></i> ${engineer.role}</h5>
			</div>
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${engineer.id}</li>
					<li class="list-group-item">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
					<li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="blank" class="card-link">${engineer.github}</a></li>
				</ul>		
			</div>
		</div>
	</div>`
}

const makeManagerCards = (manager) => {
	return `
	<!-- Manager Card -->
	<div class="col">
		<div class="card shadow p-3 mb-5 bg-body rounded">
			<div class="card-header text-white bg-primary mb-3">
				<h4>${manager.name}</h4>
				<h5><i class="fas fa-mug-hot"></i> ${manager.role}</h5>
			</div>
			<div class="card-body">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${manager.id}</li>
					<li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
					<li class="list-group-item">Office Number: ${manager.office}</li>
				</ul>		
			</div>
		</div>
	</div>
`
}

module.exports = team => {
	return `
	<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<script src="https://kit.fontawesome.com/4ec8595baa.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
	<title>Team Orginaizer</title>
</head>

<body>
	<header class="container">
		<div class="page-header">
			<h1 class="text-white bg-secondary mb-3" style="text-align: center;margin-top: 0.3em;padding-top: 0.7em;padding-bottom: 0.7em;">Team Orginizer</h1>
		</div>
	</header>
	<div class="container">
		<div class="row row-cols-1 row-cols-md-2 g-4">
		${makeTeam(team)}
		</div>
	</div>	
</body>
</html>`
}
