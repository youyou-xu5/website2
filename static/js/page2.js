const inchBtn = document.getElementById("inchBtn");
const cmBtn = document.getElementById("cmBtn");
const unitEls = [
	document.getElementById("unitHeight"),
	document.getElementById("unitWidth"),
	document.getElementById("unitDepth"),
];

inchBtn.onclick = function () {
	inchBtn.classList.add("active");
	cmBtn.classList.remove("active");
	unitEls.forEach((unit) => (unit.textContent = "IN"));
};

cmBtn.onclick = function () {
	cmBtn.classList.add("active");
	inchBtn.classList.remove("active");
	unitEls.forEach((unit) => (unit.textContent = "CM"));
};
