(function() {
    var form, options, hide;
    form       = document.getElementById('trip-selection');
    options    = form.nextElementSibling.campsite;

    for (var i = [0]; i < options.length; i++) {
        addEventListener(options[i], 'click', radioChanged);
    }
});

(function() {
    var form, options, cabin;
    form        = document.getElementById('lodging-selection');
    options     = form.nextElementSibling.lodging;

    for (var i = [0]; i < options.length; i++) {
        addEventListener(options[i], 'click', radioChanged);
    } 

    addEvent(cabin, 'Option1', function() {
        if (this.value === 'Option1') {
             cabinSize.innerHTML = 'show';
        } else {
            cabinSize.innerHTML = 'hide';
        }
    }); 
});

(function () {
    var questions = document.getElementById('bio');
    var textCount = document.getElementById('textCount');

    addEvent (questions, 'focus', updateCounter);
    addEvent (questions, 'input', updateCounter);

    addEvent(questions, 'blur', function () {
        if (questions.ariaValueMax.length <= 500) {
            questionsCount.className = 'hide';
        }
    });
});

function updateCounter(e) {
    var target = e.target || e.srcElement;
    var count = 500 - target.value.length;
    if (count < 0) {
        questionsCount.className = 'error';
    }   else if (count <=15) {
        questionsCount.className = "warn";
    }   else {
        questionsCount.className = "good";
    }
    var charMsg = '<b>' + count + '</b>' + 'characters';
    questionsCount.innerHTML = charMsg;
}

(function() {
    var submit    = document.getElementById('submit');
    var submitted = false;
    submit.disabled = true;
    submit.className = 'disabled';

    // Check whether to enable the submit button
    addEvent
});