/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

// Promise with fetch
fetch('https://api.chucknorris.io/jokes/random')
	.then(response => {
		if(!response.ok) {
			throw new Error("Response was not OK.");
		}

		// output joke
		return response.json();
	})
	.then(joke => {
		// console.log("Joke:", joke);
		document.querySelector('#joke').innerText = joke.value;
	})
	.catch(err => {
		console.log("Could not fetch joke. Reason:", err);
		document.querySelector('#joke').innerText = "ERROR. You don't summon Chuck Norris, Chuck Norris summons you.";
	});




