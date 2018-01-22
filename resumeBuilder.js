var myBio = {
	'name': 'Roman Khudobei',
	'role': 'Student',
	'contacts': {
		'email': 'roman.khudobei@gmail.com',
		'mobile': 'here should be my number',
		'location': 'Ternopil'
	},
	'pictureURL': '',
	'message': 'do not have time to write it. I will do it later.',
	'skills': [
		'Python 2/3', 'JavaScript', 'HTML5', 'CSS3', 'regex'
	]
};

var work = {
    'jobs': [
        {
            'employer': 'Company #1',
            'title': 'Developer',
            'dates': 'example dates',
            'location': 'Ternopil',
            'description': 'developing web-applications'
        },
        {
            'employer': 'Company #2',
            'title': 'Developer',
            'dates': 'example dates',
            'location': 'Ternopil',
            'description': 'other development'
        }
    ]
};

var education = {
    'schools': [
        {
            'name': 'School #28',
            'location': 'Ternopil',
            'graduateYear': '2013',
            'degree': 'Lower secondary'
        }
    ],
    'colleges': [
        {
            'name': 'Technical College of Ternopil National Technical University named I.Puluj',
            'location': 'Ternopil',
            'graduateYear': '2017',
            'major': 'Organization transportation and management in transport',
            'degree': 'Junior specialist'
        }
    ],
    'universities': [
        {
            'name': 'Ternopil National Technical University named I.Puluj',
            'location': 'Ternopil',
            'graduateYear': '2019',
            'major': 'Transportation technologies',
            'degree': 'Bachelor'
        }
    ],
    'onlineCourses': [
        {
            'name': 'Intro to Computer Science',
            'source': 'udacity.com',
            'major': 'Python'
        },
        {
            'name': 'Programming foundations with Python',
            'source': 'udacity.com',
            'major': 'Python'
        },
        {
            'name': 'JavaScript Basics',
            'source': 'udacity.com',
            'major': 'JavaScript'
        }
    ]
};

var projects = {
    'trainingProjects': [
        {
            'title': 'Multiprocessing',
            'description': 'A programm should work out pictures (change size) in multiple processes.' +
                           'To change the size of pictures I used a special outer programm (ImageMagick), so my programm called another programm.' +
                           'Also, I found out difference between multiprocessing and multithreading. I tested my function in process monitoring programm.' +
                           'So, it works correctly.',
            'technologies': ['Python'],
            'dates': 'summer 2017',
            'url': ''
        },
        {
            'title': 'Parsing JSON, XML and HTML files',
            'description': 'I parsed data from news web-site, from diferrent formats, calculate words in it and return the top of words.',
            'technologies': ['Python'],
            'dates': 'summer 2017',
            'url': ''
        },
        {
            'title': 'Accounting in College',
            'description': 'In college, as minor, I had accounting. We did not have computers and write accounting in papers by "planes".' +
                           'It brokes me out, because it was very unefficiently and I decide to wrote my own programm, that will do that accounting.' +
                           'I realized it in funcional way. I define a data structure for data base, with second try, to keep track accounting, functions that create data sctructure,' +
                           'add operations with amounts, sumbit the montly work and can create report. Also, it has test cases and test function.' +
                           'Of course, it is "very alpha", but its automize a lot of stuff.',
            'dates': 'spring 2017',
            'url': ''
        }
    ]
};
// projects: web crawler, video-site, regex, different functions durring courses (is reciprocal, network etc.) 

var formattedName = HTMLheaderName.replace('%data%', myBio.name);
var formattedRole = HTMLheaderRole.replace('%data%', myBio.role)

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

if ('skills' in myBio) {
    if (myBio.skills !== []) {
        $('#header').append(HTMLskillsStart)
        $('#skills').append(HTMLskills.replace('%data%', myBio.skills.join(', ')))
    };
};

function displayWork() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        var formattedDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedDate);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
    };
};

function displayProjects() {
    for (project in projects.trainingProjects) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.trainingProjects[project].title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace('%data%', projects.trainingProjects[project].dates);
        $('.project-entry:last').append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.trainingProjects[project].description);
        $('.project-entry:last').append(formattedDescription);
    };
};
// There is a bug somwhere in displayEducation(), maybe in if statements
function displayEducation() {
    for (edu in education) {
        for (obj in education[edu]) {
            $('#education').append(HTMLschoolStart);

            if (education[edu][obj].hasOwnProperty('degree')) {
                $('.education-entry:last').append(HTMLschoolName.replace('%data%', education[edu][obj].name) + HTMLschoolDegree.replace('%data%', education[edu][obj].degree));
            } else {
                $('.education-entry:last').append(HTMLschoolName.replace('%data%', education[edu][obj].name) + '</a>');
            };

            if (education[edu][obj].hasOwnProperty('graduateYear')) {
                $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education[edu][obj].graduateYear));
            } else {
                $('.education-entry:last').append(HTMLschoolDates.replace(HTMLschoolDates, ''));
            };

            if (education[edu][obj].hasOwnProperty('location')) {
                $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education[edu][obj].location));
            } else {
                $('.education-entry:last').append(HTMLschoolLocation.replace(HTMLschoolLocation, ''));
            };

            if (education[edu][obj].hasOwnProperty('major')) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education[edu][obj].major));
            } else {
                $('.education-entry:last').append(HTMLschoolMajor.replace(HTMLschoolMajor, '<br>'));
            };
        };
    };
};

work.display = displayWork;
education.display = displayEducation; 
projects.display = displayProjects;

work.display();
education.display();
projects.display();

$('#mapDiv').append(googleMap);
