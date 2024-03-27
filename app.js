document.addEventListener('DOMContentLoaded', () => {

  // listener for button onclick event  
  document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.active-btn')?.classList.remove('active-btn');
      button.classList.add('active-btn');
      const sectionId = 'sec-' + button.id.split('-')[1];
    //   const element = document.getElementById(sectionId);
    //   element.scrollIntoView();

      document.querySelectorAll('.section').forEach(section => {
        if(section.id === sectionId)
          section.style.display = 'flex';
        else
          section.style.display = 'none'
      })

    })
  })

});
