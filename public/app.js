var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
var yerdog;




input.onkeypress = function(event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    yerdog =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};



var changeText = function(words) {
  text.innerHTML = words.replace("Your dog", yerdog);
};

var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};







//scenario = {}
var scenario = {
  one: {
    image: "http://s9.postimg.org/eceo9mp73/5860028206_d66810105f_b.jpg", //dog
    text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
  },
  two: {
    image: "http://s9.postimg.org/9p8m7v1u7/6899639786_d517c4cce3_z.jpg", //house
    text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
    buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
  },
  three: {
    image: "http://1.bp.blogspot.com/-83pWE4JxQxM/ViiOd_7nGTI/AAAAAAAADUg/yCJ8iAB-gMY/s1600/postapoc5.jpg",//"http://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
    text: "A wild gang of rabid dogs are gaining on you. Against your better judgement you enter the creepy house for saftey. Your dog is whincing and may be injured.",
    buttons: [["continue", "advanceTo(scenario.four)"]]
  },
    four: {
    image: "http://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "Your dog has run, barking loudly, into the basement. You wonder what's down there. The door jammed when you slammed it behind you. You are going to need something to pry it back open",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
    five: {
    image: "http://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
    text: "TO BE CONTINUED...",

  },
  
};

advanceTo(scenario.one);