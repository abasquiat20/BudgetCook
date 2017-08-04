function recipe() {
    var input = document.getElementById('userinput').value
    var results =

        fetch(url)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log(json)

            var hitsArray = json.hits

            var recipeInfo = hitsArray.map(function(item) {
                return {
                    image: item.recipe.image,
                    label: item.recipe.label,
                    url: item.recipe.url,
                    ingredients: item.recipe.ingredientLines
                }
            })

            var finalHTML = ''

            recipeInfo.forEach(function(recipe) {
                var ingredients = ''

                results.ingredients.forEach(function(ingredient) {
                    if (/<[a-z][\s\S]*>/i.test(ingredient)) {
                        ingredient = 'Error loading ingredient. Check full recipe link for instructions!'
                    }
                    ingredients += `<p>${ingredient}</p>`
                })

                var card =
                    `
                      <div class=" card col s6 m3 l3">
                          <div class="card medium lime darken-1">
                            <div class="card-image waves-effect waves-block waves-light">
                              <img class="activator" src="${results.image}">
                            </div>
                            <div class="card-content">
                              <span class="card-title activator grey-text text-darken-4">${results.title}<i class="material-icons right">more_vert</i></span>
                              <p><a href="${recipe.sourceUrl}">Full Recipe</a></p>
                            </div>
                            <div class="card-reveal">
                              <span class="card-title lime darken-1 grey-text text-darken-4">${results.title}<i class="material-icons right">close</i></span>
                              <p>${results.vegetarian}</p>
                              <p>${results.vegan}</p>
                              <p>${results.glutenFree}</p>
                              <p>${results.dairyFree}</p>
                              <p>${results.veryHealthy}</p>
                            </div>
                          </div>        
                      </div>
                    `

                finalHTML += card
            })

            document.getElementById("recipe").innerHTML = finalHTML
        })
}
