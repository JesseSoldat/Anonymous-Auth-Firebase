function toggleSignIn(){
	console.log('toggle');
}

function initApp(){
	firebase.auth().onAuthStateChanged(function(user){
		//user is signed in
		if(user){
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;

			document.getElementById('sign-in-status').textContent = 'Signed in';
			document.getElementById('sign-in').textContent = 'Sign out';
			document.getElementById('account-details').textContent = JSON.stringify({
				isAnonymous: isAnonymous,
				uid: uid
			}, null, ' ')
			console.log(user);
			//user is signed out
		} else {
			document.getElementById('sign-in-status').textContent ='Sign out';
			document.getElementById('sign-in').textContent = 'Sign in';
			document.getElementById('account-details').textContent = 'null';
			console.log('no user');
		}

		document.getElementById('sign-in').disabled = false;
	});
	//END  firebase.auth().onAuthStateChanged
	document.getElementById('sign-in').addEventListener('click', toggleSignIn, false)

}


window.onload = function(){
	
	initApp();
}