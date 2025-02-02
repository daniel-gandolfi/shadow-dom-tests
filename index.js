const host = document.getElementById("externalRoot");
const shadow = host.attachShadow({ mode: "open" });

/** load external css */
const link = document.createElement("link");
link.href = "./externalStyle.css";
link.rel="stylesheet";
shadow.appendChild(link);

/** Internal title creation */
const h1 = document.createElement("h1");
h1.textContent = "I'm in the shadow DOM";
h1.className="title"
h1.id="internalTitle";
h1.innerText = "Internal title";
shadow.appendChild(h1);

/** External element retrieval */
var selectorCountDiv = document.createElement("div");    
const externalTitles = document.getElementsByClassName("title");
console.assert(externalTitles[0].id === "externalTitle")
selectorCountDiv.textContent = "Number of titles in document: " + externalTitles.length+ " has id " + externalTitles[0].id;
shadow.appendChild(selectorCountDiv)

/** Internal element retrieval */
var selectorCountDiv = document.createElement("div");    
const internalTitles = shadow.querySelectorAll(".title");
console.assert(internalTitles[0].id === "internalTitle")
selectorCountDiv.textContent = "Number of titles in document: " + internalTitles.length + " has id " + internalTitles[0].id;
shadow.appendChild(selectorCountDiv)
