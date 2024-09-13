let btn = document.querySelector('button') as HTMLButtonElement;
let skill = document.querySelector('.skill') as HTMLDivElement;
btn.addEventListener('click', () => {
   skill.classList.toggle('remove')
})