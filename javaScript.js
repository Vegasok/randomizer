;(function(){

    function CreateRandomizer(){
        var self = this;
        this.total = [];
        this.randomWord = document.getElementById("randomWord");
        this.canAddValue = true;
        this.MAX_OUTPUT = 10;
        this.value = document.getElementById("value");
        this.allValues = document.getElementById("allValues");
        this.nouns = ['Dog', 'Programmer', 'Chair', 'Book', 'Table'];
        this.adjective = ['Soft', 'Clever', 'Kind', 'Angry', 'Clean'];
        this.randomWord.addEventListener("click", function(){
            self.randomizer();
        });

    }


    CreateRandomizer.prototype.randomValue = function(length){
        return Math.floor(Math.random() * length);
    };

    CreateRandomizer.prototype.renderHTML = function(id, text){
        id.innerHTML = text;
    };

    CreateRandomizer.prototype.randomizer = function(){

    var result,
        nounsLength = this.nouns.length,
        adjectiveLength = this.adjective.length,

        randomNoun = this.randomValue(nounsLength),
        randomAdjective = this.randomValue(adjectiveLength);

            result = this.nouns[randomNoun] + this.adjective[randomAdjective];

            if(this.total.length) {
                this.canAddValue = this.total.every(function (name) {
                    return name !== result;
                });
            }

            if (this.canAddValue) {
                if (this.total.length === this.MAX_OUTPUT) {
                    this.total.shift();
                    this.total.push(result)
                } else {
                    this.total.push(result)
                }
            } else {
                this.randomizer();
            }


            this.renderHTML(this.value, result);
            this.renderHTML(this.allValues, this.total.join('<br/>'));

    };


    var createRandomizer = new CreateRandomizer();
}());
