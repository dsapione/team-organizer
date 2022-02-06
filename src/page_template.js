

`<!DOCTYPE html>
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
	<div class="row row-cols-1 row-cols-md-2 g-4">

		<!-- Manager Card -->
		<div class="col">
			<div class="card shadow p-3 mb-5 bg-body rounded">
				<div class="card-header text-white bg-primary mb-3">
					<h4>${name}</h4>
					<h5><i class="fas fa-mug-hot"></i> ${role}</h5>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">ID: ${id}</li>
						<li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
						<li class="list-group-item">Office Number: ${office}</li>
					</ul>		
				</div>
			</div>
		</div>

		<!-- Intern Card -->
		<div class="col">
			<div class="card shadow p-3 mb-5 bg-body rounded">
				<div class="card-header text-white bg-primary mb-3">
					<h4>${name}</h4>
					<h5><i class="fas fa-user-graduate"></i> ${role}</h5>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">ID: ${id}</li>
						<li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
						<li class="list-group-item">School: ${school}</li>
					</ul>		
				</div>
			</div>
		</div>

		<!-- Engineer Card -->
		<div class="col">
			<div class="card shadow p-3 mb-5 bg-body rounded">
				<div class="card-header text-white bg-primary mb-3">
					<h4>${name}</h4>
					<h5><i class="fas fa-glasses"></i> ${role}</h5>
				</div>
				<div class="card-body">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">ID: ${id}</li>
						<li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
						<li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="blank" class="card-link">${github}</a></li>
					</ul>		
				</div>
			</div>
		</div>

	</div>
</body>
</html>`

module.exports = page_template;