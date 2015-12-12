    var total = [],
        canAddValue = true,
        MAX_OUTPUT = 10,
        value = document.getElementById("value"),
        allValues = document.getElementById("allValues"),
        nouns = ['Dog', 'Programmer', 'Chair', 'Book', 'Table'],
        adjective = ['Soft', 'Clever', 'Kind', 'Angry', 'Clean'];

    function randomValue(length){
        return Math.floor(Math.random() * length);
    };

    function renderHTML(id, text){
        id.innerHTML = text;
    };

    function randomizer(){

    var result,
        nounsLength = nouns.length,
        adjectiveLength = adjective.length,

        randomNoun = randomValue(nounsLength),
        randomAdjective = randomValue(adjectiveLength);

            result = nouns[randomNoun] + adjective[randomAdjective];

            if(total.length) {
                canAddValue = total.every(function (name) {
                    return name !== result;
                });
            }

            if (canAddValue) {
                if (total.length === MAX_OUTPUT) {
                    total.shift();
                    total.push(result)
                } else {
                    total.push(result)
                }
            } else {
                randomizer();
            }


            renderHTML(value, result);
            renderHTML(allValues, total.join('<br/>'));
    }



