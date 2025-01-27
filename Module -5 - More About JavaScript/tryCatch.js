function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');




    try {
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Please Enter a Number of age"
        }
        else if (age < 18) {
            throw "Your age are not suitable"
        }
        else if (age > 30){
            throw "You are so old to Participate"
        }

        errorTag.innerHTML = '';
    }
    catch (err) {
        console.log('ERROR:', err)
        errorTag.innerHTML = 'ERROR:' + err
    }


    finally {
        console.log('All done inside try catch')
    }
    console.log(11111)
}