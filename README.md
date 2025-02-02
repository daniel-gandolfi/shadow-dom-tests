# General notes 
- [docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)  
- The page CSS does not affect nodes inside the shadow DOM [as in docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#encapsulation_from_css)
- link tag works in shadow dom but :root does not work
- document selectors on shadow root node are strange (querySelector/querySelectorAll/getElementById is avail, getElementsByClassName not) 
- 