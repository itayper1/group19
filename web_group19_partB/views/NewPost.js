const myForm = document.querySelector("#my-form");
const postInput = document.querySelector("#post");
const postsList = document.querySelector(".posts");

const onsubmit = (e) => {
  e.preventDefault();

  const data = postInput.value;
  const str = postInput.value;
  const numOfWords = count_words(data);
  const numOfLetters = str.replace(/\s+/g, '').length;

  if (numOfWords === 0 || numOfWords > 10 || numOfLetters > 40) {
    alert("INVALID INPUT");
  }

  else {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(data))
    postsList.appendChild(li)
    postInput.value = ''
  }

};

const count_words = (value) => {
  no_words = value.split(" ").filter((word) => { if (word !== '') return word   });
  return no_words.length;
};

myForm.addEventListener("submit", onsubmit);
