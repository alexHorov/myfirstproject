
  
   function domParser(string) {
    const parser = new DOMParser();
    return parser.parseFromString(string, "text/html");
  }

el = el.closest(".wf-fieldset"); // елемнет у нас new-auto-filled

var text =`
<div class="wf-row">
<!-- description label -->
<div class="wf-col" style="width:30%">
    <label class="wf-label" for="totalAmount">Total Amount</label>
</div>
<!-- totalAmount -->
<div class="wf-col" style="width:70%;text-align: right">
     <span id="totalAmount" name="totalAmount" data-type="totalAmount">0.00</span>
</div>
</div>
`;

const parsedText = domParser(text);
const listNode=parsedText.querySelector("div");
el.appendChild(listNode);
 
