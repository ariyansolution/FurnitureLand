


	const loginBtn = document.querySelectorAll(".login-btn"),
		  registerBtn = document.querySelectorAll(".register-btn"),
		  lostPassBtn = document.querySelectorAll(".lost-password-btn"),
		  wraper = document.querySelector(".login-wraper"),
		  loginForm = document.querySelector(".login-form"),
		  registerForm = document.querySelector(".register-form"),
		  lostPasswordForm = document.querySelector(".lost-pass-form");

	registerBtn.forEach((btn) =>{
		btn.addEventListener("click", () =>{
			wraper.classList.add("slide-active");
			registerForm.classList.remove("form-hidden");
			loginForm.classList.add("form-hidden");
			lostPasswordForm.classList.add("form-hidden");
		});
	});

	loginBtn.forEach((btn) =>{
		btn.addEventListener("click", () =>{
			wraper.classList.remove("slide-active");
			registerForm.classList.add("form-hidden");
			loginForm.classList.remove("form-hidden");
			lostPasswordForm.classList.add("form-hidden");
		});
	});

	lostPassBtn.forEach((btn) =>{
		btn.addEventListener("click", () =>{
			registerForm.classList.add("form-hidden");
			loginForm.classList.add("form-hidden");
			lostPasswordForm.classList.remove("form-hidden");
		});
	});

	// console.log(loginBtn);
	// console.log(registerBtn);
	// console.log(lostPassBtn);