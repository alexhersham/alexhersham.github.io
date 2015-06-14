function askQuestions () {
	//so that only prompts the questions below when something happens
	// you tab everything one in & then put the } at the end of the section
	// use $('img').on('click',askQuestions); below in the function section

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
		// ' ' is to create a space between the two
	console.log(fullName);
		// displays the output in the console
	$('h2').text('Hello ' + fullName)

	var userAge = prompt('How old are you?');
	userAge = parseInt(userAge);
		//turning string into number

	if (userAge >= 18) {
		//conditional logic, then do the stuff between {}
		console.log('User is an adult!');
	} else if (userAge >=13) {
		alert('Come back when you are 18');
	} else {
		alert('Go away, child!');
	}

	// users first name is General and last name is not Assembly, then greet the general)

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		//toLowerCase pulls everything to lower case and then compares - so doesnt matter
		console.log('Greetings General');
		alert('Greetings General');
	}
	else {
	}

}

//-------- this stuff was first

// When the page has loaded
$(function() {
	// $ - calling JQUERY
	// () - anonymous function to do certain things between the {}

	$('img').on('click',askQuestions);
	//to get the questions asked when they click on an image

	//Hide the content
	$('h3').next().hide();
		//hide all content from the start

		// When the user clicks on an h3
		$('h3').on('click', function () {
			// find the h3's withing the DOM, when they click, do something

			// find the next element & hide it
			$(this).next().slideToggle(50);
				// whatever the element that was clicked on, find the next one & hide it
				// the word (this) is important in JS
				// slideToggle etc are all words JQUERY can do / gives meaning to 
			$(this).toggleClass('open');
				//creating a class of open

	});

});
// have to pull this into HTML, see last line before end of body