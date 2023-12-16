const recieve = [];

function quote() {
  const random = Number.parseInt(Math.random() * arrofquote.length - 1);

  document.getElementById("quote").innerHTML = arrofquote[random].quote;
  document.getElementById("author").innerHTML = arrofquote[random].author;
  recieve.push(random);
  console.log(recieve);
  console.log(findIndex(recieve));
}

const arrofquote = [
  {
    quote: "“Threats are the last resort of a man with no vocabulary.”",
    author: "Tamora Pierce, Lady Knight",
  },
  {
    quote:
      "“Now, said Brandons low, cold voice. Lets not be rude eve.” are the last resort of a man with no vocabulary.”",
    author: "mossad  Knight",
  },
  {
    quote:
      "ou're still here. No beer. I'm not corrupting a minor are the last resort of a man with no vocabulary.”",
    author: "Tamora Pierce, Lady Knight",
  },
  {
    quote:
      "“You're kidding. I thought all geniuses read Latin. Isn't that the international language for smart people?",
    author: " Rachel Caine, Glass Houses",
  },
  {
    quote:
      "You Damn, Claire. Warn a guy before you do a face-plant on the floor next time. I could have looked all heroic and caught you or something -Shane,I'd feel a whole lot better about the two of us if you didn't think I was the go-to guy for breaking and entering“Threats are the last resort of a man with no vocabulary.”",
    author: "Andre Gide, Autumn Leaves  ",
  },
];
