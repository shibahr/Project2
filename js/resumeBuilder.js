
var education = {
  school:[
    {
      name: "Jade Palace",
      location:"Valley of Peace",
      degree: "Dragon Warrior",
      major: "Kung Fu",
      dates: "2008-2010",
      url: "www.awesome.com"
    }
   ],
   onlineClasses:[
    {
      title: "Kung Fu for Dummies",
      school: "Home",
      dates:"2008-2010",
      url:"www.awesome.com"
    }
    ]
};

var work = {
  jobs:[
    {
      employer:"Noodle Restaurant",
      title:"Waiter",
      location:"Beijing, China",
      dates:"2008-2011",
      description:"Worked under father Goose.  I always dream of becoming Kung Fu Master"
    },
    {
      employer:"Master Shifu",
      title:"Kung Fu in training",
      location:"Beijing, China",
      dates:"2008-2011",
      description:"Trained to become the great Dragon Warrior and defeated Tai Lung to save the Valley of Peace"
    }
    ]
};

var projects = {
  projects:[
    {
      title:"Kung Fu Panda",
      dates:"2008",
      description:"In the Valley of Peace, Po the Panda finds himself chosen as a the Dragon Warrior despite the fact that he is obese and a complete novice at martial arts.",
      images:
      [
        "images/panda1.jpg",
        "images/panda1a.jpg"
      ]
    },
    {
      title:"Kung Fu Panda 2",
      dates:"2011",
      description:"Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon",
      images:
      [
        "images/panda2.jpg",
        "images/panda2a.jpg"
      ]
    }
    ]
};

var bio = {
  name: "Po",
  role: "Dragon Warrior",
  contacts:
  {
    mobile: "111-111-1111",
    email: "awesomeness@awesomeness.com",
    github: "DragonWarrior",
    twitter: "@DragonWarrior",
    location: "Hollywood, CA"
  },
    welcomeMessage: "I'm not a big fat panda. I'm the big fat panda!",
    skills:
    [
      "Eating","Kung Fu","More Kung Fu"
    ],
    bioPic: "images/pandaface.jpg"
};

//Skill Information
bio.display = function()
{
  "use strict";
  if (bio.skills.length > 0)
  {
//Header Information
    var formattedheaderName = HTMLheaderName.replace("%data%",bio.name);
    var formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#header").prepend(formattedheaderRole);
    $("#header").prepend(formattedheaderName);
    $("#header ul").append(formattedmobile);
    $("#header ul").append(formattedemail);
    $("#header ul").append(formattedgithub);
    $("#header ul").append(formattedtwitter);
    $("#header ul").append(formattedlocation);
    $("#footerContacts").append(formattedmobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedgithub);
    $("#footerContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedlocation);
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMsg);

//Skill Information
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
  }
};
bio.display();

//Job Information
projects.displayWork = function()
{
  "use strict";
  for (var job in work.jobs)
  {

//Work experience Information
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};
projects.displayWork();

//Project Information
projects.display = function()
{
  "use strict";
  for (var project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0)
    {
      for (var image in projects.projects[project].images)
      {
      var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

$("#main").append(internationalizeButton);

//Using GoogleMap
$("#mapDiv").append(googleMap);

//Education Information
education.display = function()
{
  "use strict";
  for (var school in education.school)
  {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolYears = HTMLschoolDates.replace("%data%",education.school[school].dates);
    $(".education-entry:last").append(formattedSchoolYears);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.school[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.school[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
  $("#education").append(HTMLonlineClasses);
    for (var online in education.onlineClasses)
    {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineClasses[online].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineClasses[online].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineClasses[online].dates);
      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineClasses[online].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();