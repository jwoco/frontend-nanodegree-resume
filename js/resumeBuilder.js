// Create the Bio object
var bio = {
	"name": "Joe O'Connor",
	"role": "Front-end developer",
	"contacts": {
		"mobile": "508-517-6767",
		"email": "joconnorje@gmail.com",
		"github": "jwoco",
		"twitter": "@jwoc",
		"location": "Greater Boston area"
	},
	"welcomeMsg" : "Front-end developer for hire!",
	"skills": ["html", "css", "javascript", "UI messaging", "technical writing", "usability testing"],
	"bioPic": "images/photo.JPG"
}
//This function formats and displays bio content on the resume web page
bio.Display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
	$("#topContacts").prepend(formattedHTMLmobile);
	var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email)
	$("#topContacts").append(formattedHTMLemail);
	var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github)
	$("#topContacts").append(formattedHTMLgithub);
	var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
	$("#topContacts").append(formattedHTMLtwitter);
	var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location)
	$("#topContacts").append(formattedHTMLlocation);
	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic)
	$("#header").append(formattedHTMLbioPic);

	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg)
	$("#header").append(formattedHTMLwelcomeMsg);

	if (bio.skills.length > 0) {
	var formattedHTMLskillsStart = HTMLskillsStart;
	$("#header").append(formattedHTMLskillsStart);
	for (skill in bio.skills) {
	var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[skill])
	$("#header").append(formattedHTMLskills);
	}

	// Display contact info in footer
	$("#footerContacts").prepend(formattedHTMLmobile);
	$("#footerContacts").append(formattedHTMLemail);
	$("#footerContacts").append(formattedHTMLgithub);
	$("#footerContacts").append(formattedHTMLtwitter);
	$("#footerContacts").append(formattedHTMLlocation);

	}
}
// Run the display function
bio.Display();

//(function(window) {
// Create the work object
var work = {
	"jobs": [
	{
		"employer": "Ipswitch, Inc",
		"title": "Information Development Lead",
		"location": "Lexington, MA",
		"dates": "2007 - 2015",
		"description": "Lead team of technical writers and usability testers in support of file transfer products. Researched, designed, and developed help systems, guides, web site content, and product graphics."
	},
	{
		"employer": "Ipswitch, Inc",
		"title": "Documentaton Manager",
		"location": "Augusta, GA",
		"dates": "2003 - 2007",
		"description": "Established the Information Development team as a resource for developing user interface text, and providing usability test services. Researched and set up a new publishing system to facilitate single-sourcing of help, guides, and web content and to support translations. Managed the localization of software products."
	},
	{
		"employer": "Ipswitch, Inc",
		"title": "Senior Technical Writer",
		"location": "Augusta, GA",
		"dates": "2000 - 2003",
		"description": "Sole technical writer in 15 person start-up company. Developed help, guides, and web content for first several releases of a network monitoring tool, FTP client and server, and mail server. Created documentation plans and managed project schedules."
	}
	],
};
// This function formats and displays the Work info on the resume page
function displayWork() {
for (job in work.jobs) {
	//Create the Work div
	$("#workExperience").append(HTMLworkStart);

	var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);
	var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedHTMLworkDates);
	var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedHTMLworkLocation);
	var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedHTMLworkDescription);
	}
};
// Run the display function
displayWork();

// })(this);


//(function(window) {
// Create the projects object
var projects = {
	"projects": [
	{
		"title": "Mock-up to Web Site",
		"dates": "February 28 2015",
		"description": "Create a web site page from a Photoshop mock-up",
		"images": ["images/197x148.gif", "images/197x148.gif"]
	},
	{
		"title": "Resume site",
		"dates": "March 16 2015",
		"description": "Create this resume web site using JS, JSON, HTML, CSS",
		"images": ["images/197x148.gif", "images/197x148.gif"]
	}
	]
};
// This function formats and displays the projects on the resume web page
	projects.display = function() {
		for (project in projects.projects) {
			//create the Projects div
			$("#projects").append(HTMLprojectStart);

			var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedHTMLprojectTitle);
			var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedHTMLprojectDates);
			var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedHTMLprojectDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
				var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedHTMLprojectImage);
				}
			}
 		}
	}
// Run the display function
projects.display();
//})(this);


//(function(window) {
// Create the education object
var education = {
	"schools": [
	{
		"name": "Fordham University",
		"location": "New York, NY",
		"degree": "BA",
		"majors": "Economics",
		"dates": "1981",
	},
	{
		"name": "Udacity",
		"location": "San Franciso, CA",
		"degree": "nanodegree",
		"majors": "Front-end developer",
		"dates": "2015"
	},
	],
	"onlinecourses": [
	{
		"title": "Introduction to HTML and CSS",
		"school": "Udacity",
		"date": "February 2015",
		"url": "www.udacity.com"
	},
	{
		"title": "Using Git and GitHub",
		"school": "Udacity",
		"date": "March 2015",
		"url": "www.udacity.com"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"date": "March 2015",
		"url": "www.udacity.com"
	},
	{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"date": "April 2015",
		"url": "www.udacity.com"
	},
	]
}
// This function formats and displays the education info on the resume web page
education.display = function() {
	//Create the Education Div
	$("#education").append(HTMLschoolStart);
		for (school in education.schools) {

			var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
			var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedHTMLschoolLocation);
			var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedHTMLschoolDates);
			var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedHTMLschoolMajor);
		}
	$("#education").append(HTMLonlineClasses);
		for (course in education.onlinecourses) {
			$("#education").append(HTMLschoolStart);
			var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[course].title);
			//$(".education-entry:last").append(formattedHTMLonlineTitle);
			var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[course].school);
			$(".education-entry:last").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
			var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[course].date);
			$(".education-entry:last").append(formattedHTMLonlineDates);
			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlinecourses[course].url);
			$(".education-entry:last").append(formattedHTMLonlineURL);
		}
}
// Run the display function
education.display();
//})(this);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
}

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

