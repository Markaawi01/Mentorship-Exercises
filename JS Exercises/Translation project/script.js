
//const translate_from=document.querySelector("#translate_from")
// translate_from.addEventListener("change",()=>{
//   console.log("choosent",translate_from.value)
// })

const translate_form=document.querySelector("#translate_form")
translate_form.addEventListener("submit",translateText)



async function getLanguages(){

// const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';

try {
	const response = await fetch('languages.json');
	const result = await response.json();
	const translate_to = document.querySelector("#translate_to");
	translate_to.innerHTML = `<option value="">--Select Language--</option>`;

	result.forEach(lang => {
      const option = document.createElement("option");

      option.value = lang.code;        // e.g. "en"
      option.textContent = lang.language; // e.g. "English"

      translate_to.appendChild(option);
    });
  
	// console.log(result);
} catch (error) {
	console.error(error);
}

}

getLanguages();

const translate_to=document.querySelector("#translate_to")
const translate_btn=document.querySelector("#translate_btn")
const text_input = document.querySelector("#text_input");
const translated_text = document.querySelector("#translated_text");

async function translateText(e) {
  e.preventDefault();
  const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

  const data = {
    from: "auto",
    to: translate_to.value,         // dynamic language
    text: text_input.value          // user input
  };

  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'dcb38e32a7msh7e7f4e312c9159ep13c211jsnaabfca7049a3',
      'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);

    // translated_text.value = result.translatedText || JSON.stringify(result.trans);
    let text = result.data?.translatedText || result.translatedText || result.trans;

if (text) {
  text = text.replace(/^"|"$/g, ''); // remove quotes
  translated_text.value = text;
} else {
  translated_text.value = "No translation found";
}
 

  } catch (error) {
    console.error(error);
  }
}

