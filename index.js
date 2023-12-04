
const meals = document.querySelector('.meals')
const submitBtn = document.querySelector('button')

const getMeal = document.querySelector('btn')

//https://www.themealdb.com/api/json/v1/1/filter.php?i=egg

//(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`

// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood')

const fetchMeal = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=egg')
        .then((res) => res.json())
        .then((data) => {
            if (data.meals) {
                data.meals.forEach(meal => {
                    const mealElement = document.createElement('div');
                    mealElement.classList.add('meal')
                    mealElement.innerHTML = `
                                        <h3 class="meal-title">${meal.strMeal}</h3>
                                        <div class="meal-img">
                                            <img src="${meal.strMealThumb}" alt="">
                                        </div>
                                        <button class="btn">Get Meal</button>
                            `;
                    meals.appendChild(mealElement)

                })
            }

        })
        .catch((err) => {
            console.log(err)
        })



}

fetchMeal()
// submitBtn.addEventListener('click', submit)

// function submit(e) {
//     e.preventDefault()
//     const searchValue = document.querySelector('input').value.trim()
//     fetchMeal(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`)

// }

