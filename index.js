function introduction(name) {
   
    return `Hi, my name is ${name}.`;
  }
  introduction("Snaida")
  
function introductionWithLanguage(name, language){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Snaida", "JavaScript")

function introductionWithLanguageOptional(name, language){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Kabalika", "Javascript")


function introductionWithLanguageOptional(name, language = "JavaScript"){
  
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Giovanni", JavaScript)