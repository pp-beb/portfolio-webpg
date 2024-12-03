document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    const parentCard = detailsElement.parentElement;
  
    
    if (parentCard.classList.contains('active')) {
      parentCard.classList.remove('active');
    } else {
      parentCard.classList.add('active');
    }
  }

  function openTabs()
  {
    window.open('Calculator.txt','_blank');
    window.open('Calculator.css','_blank');
    window.open('Calculator.js','_blank');
  }
  
  function haha()
  {
    alert("Chiki chiki slim shady (cought you stalking)")
  }