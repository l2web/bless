const toggleForm = () => {
  const container = document.querySelector('.container')
  const section = document.querySelector('section')

  if (container.classList.contains('active')) {
    container.classList.remove('active')
    section.setAttribute('style', 'background-color: #7A00AE')
    return
  }
  container.classList.add('active')
  section.setAttribute('style', 'background-color: #9400D3')
}

const toggleLinks = Array.from(document.querySelectorAll('.signup a'))

toggleLinks.forEach(toggleLink => {
  toggleLink.addEventListener('click', toggleForm)
})
