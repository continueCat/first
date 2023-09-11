// const btn = document.querySelector('#btn')
// const box = document.querySelector('#boxes')
// // 点击按钮切换类使盒子大小发生改变
// btn.addEventListener('click', () => box.classList.toggle('big'))


// const btn = document.querySelector('#btn');
// const box = document.querySelector('#boxes');
// // 点击按钮切换类使盒子大小发生改变
// btn.addEventListener('click', () => box.classList.toggle('big'));



const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function render() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.className = 'box'
      box.style.backgroundPosition = `${-j * 50}px ${-i * 50}px`
      boxesContainer.appendChild(box)
    }
  }
}
render()
