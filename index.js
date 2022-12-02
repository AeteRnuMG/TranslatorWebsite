const fromLang = document.querySelector('.fromLang');
const toLang = document.querySelector('.toLang');
const TranslationInput = document.querySelector('.TranslateFrom');
const TranslationResult = document.querySelector('.TranslatedResult');

function Translate(){
    let fromLanguage = fromLang.value;
    let toLanguage = toLang.value;

    let textToTranslate = TranslationInput.value;

    let ApiUrl = `https://api.mymemory.translated.net/get?q=${textToTranslate}!&langpair=${fromLanguage}|${toLanguage}`;
    fetch(ApiUrl).then(res => res.json()).then(data => {
        TranslationResult.innerHTML = data.responseData.translatedText;
        TranslationResult.setAttribute('lang', toLanguage)
    })
}

TranslationInput.addEventListener('input', Translate)