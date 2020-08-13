
	//Importamos la libreriaexpress
	varexpress=require("express");
	varapp=express();
	//Importando codigo externo
	const{ Pool,Client}=require("@mysql.js/mysql");
	

	//Configurar la conexion
	constconfig={
	host: "localhost",
	port: "3306",
	user: "root",
	password: "12345",
	database: "test",
	};
	

	//Le enseñamos a nuestro server a procesar JSON
	app.use(express.json());
	

	app.get("/students",(request,response)=>{
	varcode=request.params.code;
	varstudent={};
	varstatusCode=200;
	

	(async()=>{
	constclient=newClient(config);
	const{results,fields}=awaitclient.query("SELECT * FROM alumnos");
	response.status(statusCode).send(results);
	awaitclient.end();
	})().catch(console.error);
	});
	

	app.post("/students",(request,response)=>{
	varstudent=request.body;
	varstatusCode=200;
	

	(async()=>{
	constclient=newClient(config);
	const{results,fields}=awaitclient.query(
	`INSERT INTO alumnos (first_name, last_name, address, age, education_level) 
	       VALUES ("${student.first_name}", "${student.last_name}", "${student.address}", ${student.age}, "${student.education_level}")`
	);
	response.status(statusCode).send({
	message: "Alumno agregado con exito",
	});
	awaitclient.end();
	})().catch(console.error);
	});
	

	// app.get("/students/:code", (request, response) => {
	//   varcode = request.params.code;
	//   varstudent = {};
	//   varstatusCode = 200;
	

	//   response.status(statusCode).send("Hello");
	// });
	

	// app.post("/students", (request, response) => {
	//   //Capturando la informacion del body
	//   letstudentData = request.body;
	

	//   //Capturamos parte del JSON, Razon: Comprensión y orden
	//   conststudentPersonalData = studentData.personalData;
	//   conststudentGrades = studentData.grades;
	

	//   //Asegurarnos que el alumnos esta en octavo o noveno
	//   if (
	//     studentPersonalData.academicGrade === "Octavo" ||
	//     studentPersonalData.academicGrade === "Noveno"
	//   ) {
	//     //Iniciamos la variable que guardara la suma de las notas
	//     letgradesSum = 0;
	

	//     studentGrades.map((subject) => {
	//       //Linea para suma acumulativa
	//       gradesSum += subject.value;
	//     });
	

