// 1. Alter the text color of the paragraph to a shade of aqua.
const paragraph = document.querySelector('p')
paragraph.style.color = 'aquamarine'


// 2. Adjust the font size of the heading to 42 pixels.
const heading = document.querySelector('h1')
heading.style.fontSize = '42px'

// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.'

// 4. Reduce the opacity of the 13th item to 30% transparency.
const lists = document.querySelectorAll('.item')
lists[14].style.opacity = '30%'

// 5. Modify the text of the 3rd item to read "Greetings!"
lists[4].innerText = 'Greetings!'


// 6. Update the image below the list to display the new image.
const images = document.querySelectorAll('img')
images[1].src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="


// 7. Resize the new image to a height of 250 pixels.
images[1].style.height = '250px' 

// 8. Integrate an additional image using innerHTML below the existing image.
const imageDiv = document.querySelector('.imgDiv')
imageDiv.innerHTML+= '<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJSU-AimywfN7shm6R0HZZcNUgn2wHyq8Iw&s">'
// 9. Adjust the height of the new image to 280 pixels programmatically.

// 10. Append a 16th <li> element to the list using innerHTML.
const list = document.querySelector('ul')
list.innerHTML += '<li class="item" id="item-17">17</li>'
console.log(list.innerHTML)


// 11. Assign the same class as the other list items to the new <li> element using JavaScript.



// 12. Populate the new <li> with the text "Never gonna give you up."
const item = document.querySelector('#item-17')
item.innerText += " Never gonna give you up."